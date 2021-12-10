import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApplicationProvider } from './context/ApplicationContext';
import Loader from './components/Loader';

const Main = lazy(() => import('./layout'));

const AppRouter = () => {
  return (
    <ApplicationProvider>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </Suspense>
    </ApplicationProvider>
  );
};

export default AppRouter;
