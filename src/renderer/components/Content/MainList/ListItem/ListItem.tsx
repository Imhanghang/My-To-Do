import styles from "../../index.module.scss";
import { FieldTimeOutlined } from "@ant-design/icons";
import React from "react";
import { loadState, saveState } from "../../../../local-storage";
import { functions } from "electron-log";

interface ListItemProps {
  item: any,
  onCheck: Function,
}

export const ListItem = ({item, onCheck}:ListItemProps) => {

	return (
    <div key={item.id} className={styles.item}>
      <input type={"radio"} onClick={onCheck(item)}/>
      <div>{item.content}</div>
      <div><FieldTimeOutlined />
        <span>{item.time}</span>
      </div>
    </div>
	)
}
