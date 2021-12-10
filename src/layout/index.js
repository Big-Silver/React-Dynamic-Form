import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';
import './Layout.less';

const Landing = lazy(() => import('../pages/Landing'));

const Main = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Header />
      <Content className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default Main;
