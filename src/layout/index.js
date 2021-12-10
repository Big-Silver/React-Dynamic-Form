import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';
import './Layout.less';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Landing')),
  },
];

const Main = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Header />
      <Content className="main-content">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Content>
    </Layout>
  );
};

export default Main;
