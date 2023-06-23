import React, { useState } from 'react';
import { Avatar, Layout, Menu } from 'antd';
import Search from 'antd/es/input/Search';
import styles from './index.module.css';

const { Sider } = Layout;

// eslint-disable-next-line react/function-component-definition
const MainMenu: React.FC = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={styles.siderContainer}
    >
      <div className="demo-logo-vertical" />
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      <Search />
      <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
};

export default MainMenu;
