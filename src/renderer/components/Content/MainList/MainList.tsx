import styles from "../index.module.scss";
import React, { useState } from "react";
import { FieldTimeOutlined } from "@ant-design/icons";
import { loadState, saveState } from "../../../local-storage";
import { TodoItem } from "./ListItem/TodoItem";
import { TodoItemProps } from "../Content";

interface MainListProps {
  list: Array<TodoItemProps>,
}

export const MainList = ({list}:MainListProps) => {
  const [, updateView] = useState<number>(new Date().getTime());


  function onCheck(item: TodoItemProps) {
    return () => {
      let splice = list.splice(list.indexOf(item), 1);
      const store = loadState() || {};
      const finishedList = store.finishedList || [];
      finishedList.push(splice[0]);
      store.finishedList = finishedList;
      store.todoList = list;
      saveState(store);

      updateView(new Date().getTime());
    }
  }

  function renderList(list: Array<TodoItemProps>) {
    return list?.map((item: any) => {
      return (
        <TodoItem item={item} onCheck={onCheck}/>
      );
    });
  }

  return (
    <div className={styles.mainList}>{renderList(list) || ""}</div>
  );
};
