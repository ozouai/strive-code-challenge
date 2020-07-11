package main

import (
	"bytes"
	"context"
	"github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/ozouai/strive-code-challenge/models"
	"github.com/ozouai/strive-code-challenge/quizapipb"
	"github.com/ozouai/strive-code-challenge/web"
	"net/http"
	"os"
	"time"
)

type App struct {
	DB *gorm.DB
}

func (m *App) SubmitQuiz(ctx context.Context, req *quizapipb.SubmitQuizRequest) (*quizapipb.SubmitQuizResponse, error) {
	res := &quizapipb.SubmitQuizResponse{}
	session := &models.QuizEntry{QuizTemplateID:uint(req.GetId())}
	m.DB.Create(&session)

	for _, q := range req.GetResponses() {
		response := &models.QuizQuestionEntry{QuizEntryID:session.ID, QuizQuestionTemplateID:uint(q.GetQuestionId()), Answer:q.GetResponse()}
		m.DB.Create(&response)
	}
	return res, nil
}

func (m *App) AdminCreateQuiz(ctx context.Context, req *quizapipb.AdminCreateQuizRequest) (*quizapipb.AdminCreateQuizResponse, error) {
	res := &quizapipb.AdminCreateQuizResponse{}
	q := m.CreateQuizTemplate(req.GetName())
	res.Id = uint32(q.ID)
	return res, nil
}

func (m *App) AdminAddQuestionToQuiz(ctx context.Context, req *quizapipb.AdminAddQuestionToQuizRequest) (*quizapipb.AdminAddQuestionToQuizResponse, error) {
	res := &quizapipb.AdminAddQuestionToQuizResponse{}
	quiz := &models.QuizTemplate{}
	m.DB.First(&quiz, uint(req.QuizId))
	q := m.CreateQuizQuestionTemplate(quiz, req.GetText())
	res.Result = &quizapipb.Question{Id:uint64(q.ID), Text:q.Text}
	return res, nil
}

func (m *App) GetQuiz(ctx context.Context, req *quizapipb.GetQuizRequest) (*quizapipb.GetQuizResponse, error) {
	res := &quizapipb.GetQuizResponse{}
	quiz := &models.QuizTemplate{}
	m.DB.First(&quiz, uint(req.Id))
	m.DB.Find(&quiz.Questions, "quiz_template_id = ?", uint(req.Id))
	for _, q := range quiz.Questions {
		res.Questions = append(res.Questions, &quizapipb.Question{Id:uint64(q.ID), Text:q.Text})
	}
	return res, nil
}

func (m *App) ListQuizes(ctx context.Context, req *quizapipb.ListQuizesRequest) (*quizapipb.ListQuizesResponse, error) {
	res := &quizapipb.ListQuizesResponse{}
	entries := []models.QuizTemplate{}
	m.DB.Find(&entries)
	for _, e := range entries {
		res.Quizes = append(res.Quizes, &quizapipb.ListQuizesResponse_Entry{Name:e.Name, Id: uint32(e.ID)})
	}
	return res, nil
}

func envOrDefault(key string, defaultString string) string {
	d := os.Getenv(key)
	if d == "" {
		return defaultString
	}
	return d
}

func main() {

	dsn := &mysql.Config{Addr: envOrDefault("MYSQL_HOST", "127.0.0.1"),
		User:                 envOrDefault("MYSQL_USER", "root"),
		Passwd:               envOrDefault("MYSQL_PASSWORD", "password"),
		DBName:               envOrDefault("MYSQL_DB", "quiz"),
		AllowNativePasswords: true,
		Params: map[string]string{
			"charset":   "utf8",
			"parseTime": "True",
			"loc":       "Local",
		}}
	db, err := gorm.Open("mysql", dsn.FormatDSN())
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.AutoMigrate(&models.QuizQuestionTemplate{})
	db.AutoMigrate(&models.QuizTemplate{})
	db.AutoMigrate(&models.QuizEntry{})
	db.AutoMigrate(&models.QuizQuestionEntry{})
	db.Model(&models.QuizQuestionTemplate{}).AddForeignKey("quiz_template_id", "quiz_templates(id)", "NO ACTION", "NO ACTION")
	db.Model(&models.QuizEntry{}).AddForeignKey("quiz_template_id", "quiz_templates(id)", "NO ACTION", "NO ACTION")
	db.Model(&models.QuizQuestionEntry{}).AddForeignKey("quiz_question_template_id", "quiz_question_templates(id)", "NO ACTION", "NO ACTION")
	db.Model(&models.QuizQuestionEntry{}).AddForeignKey("quiz_entry_id", "quiz_entries(id)", "NO ACTION", "NO ACTION")
	app := &App{DB: db}
	server := quizapipb.NewQuizServiceServer(app, nil)
	serveMux := http.NewServeMux()
	fileServer := http.FileServer(web.AssetFS())
	serveMux.Handle("/twirp/", server)
	serveMux.Handle("/static/", fileServer)
	serveMux.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		http.ServeContent(writer, request, "index.html", time.Now(), bytes.NewReader(web.MustAsset("build/index.html")))
	})


	err = http.ListenAndServe("127.0.0.1:8000", serveMux)
	if err != nil {
		panic(err)
	}
}

func (m *App) CreateQuizTemplate(name string) *models.QuizTemplate {
	record := &models.QuizTemplate{Name: name}
	m.DB.Create(record)
	return record
}

func (m *App) CreateQuizQuestionTemplate(quiz *models.QuizTemplate, text string) *models.QuizQuestionTemplate {
	record := &models.QuizQuestionTemplate{Text: text, QuizTemplateID: quiz.ID}
	m.DB.Create(record)
	return record
}
