import styles from "../index.module.scss";
import React, { useState } from "react";
import { loadState, saveState } from "../../../local-storage";
import { TodoItem } from "./ListItem/TodoItem";
import { TodoItemProps } from "../Content";
import useGlobalStore from '../../../store/globalStore';

interface MainListProps {
  list: Array<TodoItemProps>,
  updateView: Function,
}

export const MainList = ({list, updateView}:MainListProps) => {
  const { checkTodo } = useGlobalStore((store: any) => store);

  function onCheck(item: TodoItemProps) {
    return () => {
      let splice = list.splice(list.indexOf(item), 1);
      checkTodo(splice[0])
      updateView();
    }
  }

  function renderList(list: Array<TodoItemProps>) {
    return list?.map((item: any) => {
      return (
        <TodoItem item={item} onCheck={onCheck} updateView={updateView}/>
      );
    });
  }

  return (
    <div className={styles.mainList}>{renderList(list) || ""}</div>
  );
};
