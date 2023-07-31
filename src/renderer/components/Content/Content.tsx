import { Button, DatePicker, Form, Input, Layout, theme } from "antd";
import React, { useEffect, useRef, useState } from "react";
import CurrentDateTime from "./DateClock/DateClock";
import styles from "./index.module.scss";
import { loadState, saveState } from "../../local-storage";
import { MainList } from "./MainList/MainList";
import useUpdate from "../../hooks/useUpdate";
import useGlobalStore, { GlobalStore } from "../../store/globalStore";

const AntContent = Layout.Content;




// eslint-disable-next-line react/function-component-definition
export interface ContentProps {
  title: string
}


export enum ItemStatusEnum {
  TODO = 'TODO',
  FINISHED = 'FINISHED',
  DELETED = 'DELETED',
}

export interface TodoItemProps {
  id: number,
  content: string,
  time: Date,
  status: ItemStatusEnum,
  star: boolean,
}

interface Moment {
  toDate: Function,
}

const Content: React.FC<ContentProps> = ({ title }) => {
  const [form] = Form.useForm();
  const inputRef = useRef<{ input: HTMLInputElement }>(null);
  const updateView = useUpdate();
  const { todoList, finishedList, addTodo } = useGlobalStore((store: any) => store);
  let list = getList(title);



// const store = new Store();
  function getList(title: any) {
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
  let handleAdd = () => {

    form.validateFields().then((values) => {
      if (!form.getFieldValue("todo")) {
        return;
      }
      const { time } : {time: Moment} = values;
      const todo: TodoItemProps = {
        id: new Date().getTime(),
        content: form.getFieldValue("todo"),
        time: time.toDate(),
        star: false,
        status: ItemStatusEnum.TODO,
      } ;
      addTodo(todo);
      form.resetFields();
      updateView();
    }).catch(error=>{
      console.log(error);
    })
  };
  return (
    <AntContent style={{ margin: "16px" }} className={styles.content}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <CurrentDateTime />
        <MainList list={list} updateView={updateView}/>
        <Form className={styles.addTodo} form={form}>
          <Form.Item name="todo" rules={[{ required: true }]} className={styles.input}>
            {/* @ts-ignore */}
            <Input placeholder="添加任务" ref={inputRef} onPressEnter={handleAdd} />
          </Form.Item>
          <Form.Item name="time" rules={[{ required: true }]}><DatePicker showTime format={"YYYY-MM-DD HH:mm"} /></Form.Item>
          <Button type="link" htmlType="button" onClick={handleAdd}>
            添加
          </Button>
        </Form>
      </div>
    </AntContent>
  );
};

export default Content;
