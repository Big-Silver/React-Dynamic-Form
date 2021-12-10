import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApplicationProvider } from './context/ApplicationContext';
import Loader from './components/Loader';
import './App.less';

const Main = lazy(() => import('./layout'));

function App() {
  return (
    <ApplicationProvider>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route exact path="*" element={<Main />} />
          </Routes>
        </Router>
      </Suspense>
    </ApplicationProvider>
  );
}

export default App;
