import React, { useEffect, useState } from "react";
import { Button, List, Form, Input, Card, Steps, Layout } from "antd";
import "./App.css";
import * as protos from "./protos";
import axios from "axios";
import Link from "found/Link";
import Route from "found/Route";
import { Router, withRouter, Match } from "found";
import createBrowserRouter from "found/createBrowserRouter";
import makeRouteConfig from "found/makeRouteConfig";
import moment from "moment";

const s = protos.quizservice.QuizService.create(
  (method, requestData, callback) => {
    const endpoint = "/twirp/quizservice.QuizService/" + (method as any).name;
    axios({
      method: "POST",
      headers: {
        "content-type": "application/protobuf",
      },
      data: requestData.slice(),
      url: endpoint,
      responseType: "arraybuffer",
    }).then((data) => {
      callback(null, new Uint8Array(data.data));
    });
  }
);

function QuizList() {
  const [
    quizList,
    setQuiz,
  ] = useState<protos.quizservice.IListQuizesResponse | null>(null);
  useEffect(() => {
    s.listQuizes({}).then((res) => {
      setQuiz(res);
    });
  }, []);
  return (
    <Card title={"Take a Quiz!"}>
      <List
        dataSource={quizList?.quizes || []}
        renderItem={(item: protos.quizservice.ListQuizesResponse.IEntry) => (
          <List.Item
            actions={[
              <Link to={`/takeQuiz/${item.id}`} key="take-Quiz">
                {" "}
                <Button>Take Quiz</Button>
              </Link>,
            ]}
          >
            <List.Item.Meta title={item.name} />
          </List.Item>
        )}
      />
    </Card>
  );
}

function App(props: { children: any | any[] }) {
  return (
    <Layout className={"layout"}>
      <Layout.Header>
        <div className="logo">Quiz</div>
      </Layout.Header>
      <Layout.Content>{props.children}</Layout.Content>
    </Layout>
  );
}

function QuizTaker(props: { match: { params: { id: string } } }) {
  const id = parseInt(props.match.params.id);
  const [data, setData] = useState<protos.quizservice.GetQuizResponse | null>(
    null
  );
  useEffect(() => {
    s.getQuiz({ id: id }).then((res) => {
      setData(res);
    });
  }, [id]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [needToSubmit, setNeedToSubmit] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [questionDeadline, setQuestionDeadline] = useState(
    addMinutes(new Date(), 3)
  );
  const [timeLeft, setTimeLeft] = useState(
    moment
      .utc(moment(addMinutes(new Date(), 3)).diff(moment(new Date())))
      .format("HH:mm:ss")
  );
    const nextQuestion = (answer: string) => {
        questionAnswers[currentQuestion] = answer;
        setTimeLeft(
            moment
                .utc(
                    moment(addMinutes(new Date(), 3)).diff(moment(new Date()))
                )
                .format("HH:mm:ss")
        );
        setQuestionDeadline(addMinutes(new Date(), 3));
        if (currentQuestion === (data?.questions?.length || 0) - 1) {
            setNeedToSubmit(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    };
  useEffect(() => {
    const timer = setInterval(() => {
        if(moment(questionDeadline).diff(moment(new Date())) < 0) {
            nextQuestion("DNF");
        }
      setTimeLeft(
        moment
          .utc(moment(questionDeadline).diff(moment(new Date())))
          .format("HH:mm:ss")
      );
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  if (!needToSubmit) {
    return (
      <>
        <Card title={"Quiz Progress"}>
          <Steps current={currentQuestion}>
            {data?.questions.map((q, i) => (
              <Steps.Step
                title={q.text}
                subTitle={currentQuestion === i && `Left ${timeLeft}`}
              />
            ))}
            <Steps.Step title="Submission" />
          </Steps>
        </Card>
        <Card title={data?.questions[currentQuestion].text}>
          <Form
            key={`form-${currentQuestion}`}
            onFinish={(values) => {
                nextQuestion(values.value);
            }}
          >
            <Form.Item name="value">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </>
    );
  }
  if (!thankYou) {
    return (
        <>
        <Card style={{textAlign: "center"}}>
        <h1>Test Complete!</h1>
      <Button
        onClick={() => {
          s.submitQuiz({
            id: id,
            responses:
              data?.questions.map((answer, index) => {
                return {
                  questionId: answer.id as number,
                  response: questionAnswers[index],
                };
              }) || [],
          }).then(() => {
            setThankYou(true);
          });
        }}
      >
        Submit Answers
      </Button>
        </Card>
      </>

    );
  }
  return <div>Thank You!</div>;
}

function QuizCreator(props: { router: Router }) {
  const [
    quizList,
    setQuiz,
  ] = useState<protos.quizservice.IListQuizesResponse | null>(null);
  useEffect(() => {
    s.listQuizes({}).then((res) => {
      setQuiz(res);
    });
  }, []);
  return (
    <div>
      <Card title="Create a new Quiz">
        <Form
          onFinish={(values) => {
            s.adminCreateQuiz({ name: values.name }).then((res) => {
              props.router.push(`/admin/editQuiz/${res.id}`);
            });
          }}
        >
          <Form.Item label={"Quiz Name"} name="name">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add New Quiz
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title="Edit existing quiz">
        <List
          dataSource={quizList?.quizes || []}
          renderItem={(item: protos.quizservice.ListQuizesResponse.IEntry) => (
            <List.Item
              actions={[
                <Link to={`/admin/editQuiz/${item.id}`} key="edit-Quiz">
                  {" "}
                  <Button>Edit Quiz</Button>
                </Link>,
              ]}
            >
              <List.Item.Meta title={item.name} />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

function EditQuiz(props: { match: { params: { id: string } } }) {
  const id = parseInt(props.match.params.id);
  const [data, setData] = useState<protos.quizservice.IGetQuizResponse | null>(
    null
  );
  useEffect(() => {
    s.getQuiz({ id: id }).then((res) => {
      setData(res);
    });
  }, [id]);
  return (
    <div>
      <Card title="Add new question">
        <Form
          onFinish={(values) => {
            s.adminAddQuestionToQuiz({
              quizId: id,
              text: values.text,
            }).then((res) => {
              if (res.result) {
                setData({
                  ...data,
                  questions: (data?.questions || []).concat([res.result]) || [],
                });
              }
            });
          }}
        >
          <Form.Item label={"Question Text"} name={"text"}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Question
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title="Current Questions">
        <List
          dataSource={data?.questions || []}
          renderItem={(item: protos.quizservice.IQuestion) => (
            <List.Item>
              <List.Item.Meta title={item.text} />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={App}>
      <Route Component={() => <QuizList />} />
      <Route path={"takeQuiz/:id"} Component={QuizTaker} />
      <Route path={"admin"} Component={QuizCreator} />
      <Route path={"admin/editQuiz/:id"} Component={EditQuiz} />
    </Route>
  ),
});

export default BrowserRouter;

function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000);
}
