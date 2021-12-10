import React, { createContext, useState } from 'react';

const defaultStates = {
  json: [],
  setJson: [],
  formJson: [],
  setFormJson: () => null,
  fields: [],
  setFields: () => null,
};

const ApplicationContext = createContext(defaultStates);

const ApplicationProvider = ({ children }) => {
  const [json, setJson] = useState([]);
  const [formJson, setFormJson] = useState([]);
  const [fields, setFields] = useState([]);

  return (
    <ApplicationContext.Provider
      value={{
        json,
        setJson,
        formJson,
        setFormJson,
        fields,
        setFields,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContext;

export { ApplicationProvider };
