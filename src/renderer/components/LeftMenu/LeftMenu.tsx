import React, { useState } from 'react';
import { Avatar, Layout, Menu } from 'antd';
import Search from 'antd/es/input/Search';
import styles from './index.module.scss';

const { Sider } = Layout;

interface MainMenuProps {
  items: any,
  setTitle: Function,
}
const LeftMenu = ({ items, setTitle }:MainMenuProps) => {
  const [collapsed, setCollapsed] = useState(false);

  let handleMenuClick = ({ key }:{key:any}) => {
    setTitle(key);
  };

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={styles.siderContainer}
    >
      <div className="demo-logo-vertical" />
      <div className={styles.avatar}>
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        <div>gonghang</div>
      </div>
      <Search />
      <Menu defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick}/>
    </Sider>
  );
};

export default LeftMenu;
