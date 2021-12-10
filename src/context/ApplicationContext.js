import React, { createContext, useState, useEffect } from 'react';
import { data } from '../data/data.js';

const defaultStates = {
  json: [],
  setJson: [],
};

const ApplicationContext = createContext(defaultStates);

const ApplicationProvider = ({ children }) => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    setJson(data());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        json,
        setJson,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;

export { ApplicationProvider };
