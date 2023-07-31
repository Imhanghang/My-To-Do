import React, { useState } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import './App.css';
import {
  UnorderedListOutlined,
  CheckOutlined,
  HighlightOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Content from './components/Content/Content';

const items = [
  {
    key: '我的待办',
    label: '我的待办',
    icon: <UnorderedListOutlined />
  },
  {
    key: '已完成',
    label: '已完成',
    icon: <CheckOutlined />
  },
  {
    key: '笔记',
    label: '笔记',
    icon: <HighlightOutlined />
  },
  {
    key: '番茄钟',
    label: '番茄钟',
    icon: <ClockCircleOutlined />
  }
];
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const [title, setTitle] = useState('');
  return (
    <ConfigProvider theme={{
      algorithm: theme.defaultAlgorithm
    }}><Layout style={{ minHeight: '100vh' }}>
      <LeftMenu items={items} setTitle={setTitle} />
      <Content title={title} />
    </Layout></ConfigProvider>
  );
};

export default App;
