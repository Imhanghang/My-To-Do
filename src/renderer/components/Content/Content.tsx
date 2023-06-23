import { Layout, theme } from 'antd';
import React from 'react';

const AntContent = Layout.Content;


// eslint-disable-next-line react/function-component-definition
const Content: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntContent style={{ margin: '16px' }}>
      <div
        style={{
          padding: 24,
          minHeight: '100%',
          background: colorBgContainer,
        }}
      >
        <h1>我的待办</h1>
      </div>
    </AntContent>
  );
};

export default Content;
