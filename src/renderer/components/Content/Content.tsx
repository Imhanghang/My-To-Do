import { Button, DatePicker, Form, Input, Layout, theme } from "antd";
import { FieldTimeOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import CurrentDateTime from "./DateClock/DateClock";
import styles from "./index.module.scss";
import Store from "electron-store";
import { loadState, saveState } from "../../local-storage";
import { MainList } from "./MainList/MainList";

const AntContent = Layout.Content;



function onSelectTime() {

}


// eslint-disable-next-line react/function-component-definition
export interface ContentProps {
  title: string
}
export interface TodoItem {
  id: number,
  content: string,
  time: string,
  status?: string,
}
const Content: React.FC<ContentProps> = ({ title }) => {
  const [form] = Form.useForm();
  const inputRef = useRef<{ input: HTMLInputElement }>(null);
  const [, updateView] = useState<number>(new Date().getTime());
  // const [list, setList] = useState<[]>();
  let list = getList(title);



// const store = new Store();
  function getList(title: any) {
    let store = loadState() || {};
    const todoList = store.todoList || [];
    const finishedList = store.finishedList || [];
    let res;
    switch (title) {
      case "我的待办":
        res = todoList;
        break;
      case "已完成":
        res = finishedList;
        break;
    }
    return res;
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 13) {
        console.log("按下了Enter键");
      }
    };

    if (inputRef.current) {
      inputRef.current.input.onkeydown = handleKeyDown;
    }

    return () => {
      const currentInputRef = inputRef.current;
      if (currentInputRef) {
        currentInputRef.input.onkeydown = null;
      }
    };
  }, [inputRef]);

  function addTodo(todo: TodoItem) {
    const store = loadState() || {};
    const todoList = store.todoList || [];
    todoList.push(todo);
    store.todoList = todoList;
    saveState(store);
  }

  let handleCommit = () => {
    form.validateFields().then((values) => {
      if (!form.getFieldValue("todo")) {
        return;
      }
      const { time } = values;
      const date = time.format("YYYY-MM-DD HH:mm");
      const todo: TodoItem = {
        id: new Date().getTime(),
        content: form.getFieldValue("todo"),
        time: date
      } ;
      addTodo(todo);
      form.resetFields();
      updateView(new Date().getTime());
    }).catch(error=>{
      console.log(error);
    })
  };
  return (
    <AntContent style={{ margin: "16px" }} className={styles.content}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <CurrentDateTime />
        <MainList list={list}/>
        <Form className={styles.addTodo} form={form}>
          <Form.Item name="todo" rules={[{ required: true }]}>
            {/* @ts-ignore */}
            <Input placeholder="添加任务" ref={inputRef} onPressEnter={handleCommit} />
          </Form.Item>
          <Form.Item name="time" rules={[{ required: true }]}><DatePicker showTime format={"YYYY-MM-DD HH:mm"} /></Form.Item>
          <Button type="link" htmlType="button" onClick={handleCommit}>
            添加
          </Button>
        </Form>
      </div>
    </AntContent>
  );
};

export default Content;
