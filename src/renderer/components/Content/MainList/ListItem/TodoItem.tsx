import styles from "./index.module.scss";
import { FieldTimeOutlined } from "@ant-design/icons";
import React from "react";
import { TodoItemProps } from "../../Content";
import { getFormatDate } from "../../../utils/getFormatDate";
import { isBeforeToday } from "../../../utils/isBeforeToday";

interface ListItemProps {
  item: TodoItemProps,
  onCheck: Function,
}

export const TodoItem = ({ item, onCheck }: ListItemProps) => {

  let formatDate = getFormatDate(new Date(item.time));
  let dateElement;
  if (isBeforeToday(new Date(item.time))) {
    dateElement = <span className={styles.beforeToday}>{formatDate}</span>;
  }else {
    dateElement = <span className={styles.date}>{formatDate}</span>;
  }
  return (
    <div key={item.id} className={styles.item}>
      <input type={"radio"} onClick={onCheck(item)} />
      <div className={styles.content}>{item.content}</div>
      <div className={styles.otherInfo}>
        <FieldTimeOutlined />
        {dateElement}
      </div>
    </div>
  );
};
