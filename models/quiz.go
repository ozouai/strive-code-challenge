package models

import (
	"github.com/jinzhu/gorm"
)

type QuizTemplate struct {
	gorm.Model
	Name        string
	Description string
	Questions   []QuizQuestionTemplate
}

type QuizQuestionTemplate struct {
	gorm.Model
	Text           string
	HelpText       string
	Type           string
	QuizTemplateID uint
}

type QuizEntry struct {
	gorm.Model
	QuizTemplateID uint
}

type QuizQuestionEntry struct {
	gorm.Model
	QuizEntryID uint
	QuizQuestionTemplateID uint
	Answer string
}