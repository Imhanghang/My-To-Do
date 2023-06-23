import React from 'react';
import { Layout } from 'antd';
import './App.css';
import {
  UnorderedListOutlined,
  CheckOutlined,
  HighlightOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import MainMenu from './components/MainMenu/MainMenu';
import Content from './components/Content/Content';

const items = [
  {
    key: '1',
    label: '我的待办',
    icon: <UnorderedListOutlined />,
  },
  {
    key: '2',
    label: '已完成',
    icon: <CheckOutlined />,
  },
  {
    key: '3',
    label: '笔记',
    icon: <HighlightOutlined />,
  },
  {
    key: '4',
    label: '番茄钟',
    icon: <ClockCircleOutlined />,
  },
];
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainMenu items={items}/>
      <Content />
    </Layout>
  );
};

export default App;
