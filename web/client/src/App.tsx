import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { Button, List, Form, Input, Card } from 'antd';
import './App.css';
import * as protos from "./protos";
import axios from "axios";
import Link from 'found/Link';
import Redirect from 'found/Redirect';
import Route from 'found/Route';
import createBrowserRouter from 'found/createBrowserRouter';
import makeRouteConfig from 'found/makeRouteConfig';

const s = protos.quizservice.QuizService.create(((method, requestData, callback) => {
  const endpoint = "/twirp/quizservice.QuizService/"+(method as any).name;
  axios({
    method: "POST",
    headers: {
      "content-type": "application/protobuf",
    },
    data: requestData.slice(),
    url: endpoint,
    responseType: 'arraybuffer',
  }).then(data => {
    callback(null, new Uint8Array(data.data));
  })
}));

function QuizList() {
  const [quizList, setQuiz] = useState<protos.quizservice.IListQuizesResponse | null>(null);
  useEffect(()=>{
    s.listQuizes({}).then(res=>{
      setQuiz(res);
    })
  }, []);
  return (
      <div>QuizList
      <List dataSource={quizList?.quizes || []} renderItem={(item: protos.quizservice.ListQuizesResponse.IEntry)=>(
          <List.Item
          actions={[
              <Link to={`/takeQuiz/${item.id}`} key="take-Quiz"> <Button>Take Quiz</Button></Link>
          ]}>
          <List.Item.Meta title={item.name} />
          </List.Item>
      )}>

      </List>
      </div>

  );
}

function App(props: {children: any | any[]}) {
  return (
    <div className="App">
        {props.children}
    </div>
  );
}


function QuizTaker(props: {match: {params: {id: string}}}) {
    const id = parseInt(props.match.params.id);
    const [data, setData] = useState<protos.quizservice.GetQuizResponse | null>(null);
    useEffect(()=>{
        s.getQuiz({id: id}).then(res=>{
            setData(res);
        })
    }, [id]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionAnswers, setQuestionAnswers] = useState<{[key: number]: string}>({});
    const [needToSubmit, setNeedToSubmit] = useState(false);
    const [thankYou, setThankYou] = useState(false);
    if(!needToSubmit) {
        return (
            <Card title={data?.questions[currentQuestion].text}>
                <Form key={`form-${currentQuestion}`} onFinish={values => {
                    questionAnswers[currentQuestion] = values.value;
                    if (currentQuestion == (data?.questions?.length || 0) - 1) {
                        setNeedToSubmit(true);
                    } else {
                        setCurrentQuestion(currentQuestion+1);
                    }
                }}>
                    <Form.Item name="value">
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
    if(!thankYou) {
        return (<Button onClick={() => {
            s.submitQuiz({
                id: id,
                responses: data?.questions.map((answer, index) => {
                    return {
                        questionId: answer.id as number,
                        response: questionAnswers[index],
                    }
                }) || [],
            }).then(() => {
                setThankYou(true);
            })
        }}>Submit Answers</Button>)
    }
    return (<div>Thank You!</div>)
}

function QuizCreator() {
    const [quizList, setQuiz] = useState<protos.quizservice.IListQuizesResponse | null>(null);
    useEffect(()=>{
        s.listQuizes({}).then(res=>{
            setQuiz(res);
        })
    }, []);
    return (
        <div>QuizList
            <List dataSource={quizList?.quizes || []} renderItem={(item: protos.quizservice.ListQuizesResponse.IEntry)=>(
                <List.Item
                    actions={[
                        <Link to={`/admin/editQuiz/${item.id}`} key="edit-Quiz"> <Button>Edit Quiz</Button></Link>
                    ]}>
                    <List.Item.Meta title={item.name} />
                </List.Item>
            )}>

            </List>
        </div>

    );
}

function EditQuiz(props: {match: {params: {id: string}}}) {
    const id = parseInt(props.match.params.id);
    const [data, setData] = useState<protos.quizservice.IGetQuizResponse | null>(null);
    useEffect(()=>{
        s.getQuiz({id: id}).then(res=>{
            setData(res);
        })
    }, [id]);
    return (
        <div>
        <Form onFinish={values=>{
            s.adminAddQuestionToQuiz({
            quizId: id,
            text: values.text
            }).then(res=>{
                if(res.result) {
                    setData({
                            ...data,
                            questions: (data?.questions || []).concat([res.result]) || [],
                        }
                    );
                }
            })
        }}>
        <Form.Item label={"Question Text"} name={"text"}><Input /></Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Question
                </Button>
            </Form.Item>
        </Form>
        <List dataSource={data?.questions || []} renderItem={(item: protos.quizservice.IQuestion) => (
            <List.Item>
            <List.Item.Meta title={item.text} />
            </List.Item>
        )} />
        </div>
    )
}


const BrowserRouter = createBrowserRouter({
    routeConfig: makeRouteConfig(
        <Route path="/" Component={App}>
            <Route Component={()=><QuizList/>} />
            <Route path={"takeQuiz/:id"} Component={QuizTaker} />
            <Route path={"admin"} Component={QuizCreator}>

            </Route>
            <Route path={"admin/editQuiz/:id"} Component={EditQuiz} />
        </Route>
    )
});

export default BrowserRouter;
