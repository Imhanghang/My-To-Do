import styles from "./index.module.scss";
import { CalendarOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import React from "react";
import { ItemStatusEnum, TodoItemProps } from "../../Content";
import { getFormatDate } from "../../../utils/getFormatDate";
import { isBeforeToday } from "../../../utils/isBeforeToday";
import { loadState, saveState } from "../../../../local-storage";

interface ListItemProps {
  item: TodoItemProps,
  onCheck: Function,
  updateView: Function,
}



export const TodoItem = (props: ListItemProps) => {
  const { item, onCheck, updateView } = props;
  const star = item.star;


  let formatDate = getFormatDate(new Date(item.time));
  let dateElement;
  if (isBeforeToday(new Date(item.time))) {
    dateElement = <span className={styles.beforeToday}>{formatDate}</span>;
  }else {
    dateElement = <span className={styles.date}>{formatDate}</span>;
  }
  return (
    <div key={item.id} className={styles.item}>
      {item.status === ItemStatusEnum.TODO && <input type={"radio"} onClick={onCheck(item)} />}
      <div className={styles.content}>{item.content}</div>
      <div className={styles.otherInfo}>
        <CalendarOutlined />
        {dateElement}
      </div>
      <div className={styles.lastElement} onClick={handleClick }>
        {star ? <StarFilled /> : <StarOutlined />}
      </div>
    </div>
  );

  function handleClick() {
    const store = loadState() || {};
    const todoList: Array<TodoItemProps> = store.todoList || [];
    const curItem = todoList.find((i: any) => i.id === item.id);
    // @ts-ignore
    curItem.star = !curItem.star;
    saveState(store);
    updateView();
  }

};
