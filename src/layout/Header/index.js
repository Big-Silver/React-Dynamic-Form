import React from 'react';
import { Layout, Typography } from 'antd';
import './Header.less';

const Header = () => {
  const { Header } = Layout;
  const { Title } = Typography;

  return (
    <Header className="main-header">
      <div className="main-header-container">
        <Title level={2} className="title">
          Dynamic Form
        </Title>
      </div>
    </Header>
  );
};

export default Header;
