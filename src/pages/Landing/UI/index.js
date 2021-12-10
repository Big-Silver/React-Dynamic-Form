import React, { useContext, useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import ApplicationContext from '../../../context/ApplicationContext.js';
import DynamicForm from '../../../components/Form/index.js';
import { data } from '../../../data/data.js';
import './Landing.less';

const Landing = () => {
  const { json, setJson, formJson, setFormJson, fields, setFields } =
    useContext(ApplicationContext);

  useEffect(() => {
    setJson(data());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = (e) => {
    setFormJson(e);
  };

  return (
    <div className="dynamic-landing">
      <DynamicForm
        json={json}
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
        onFinish={(e) => onFinish(e)}
      />
      <ReactJson src={fields} />
      <ReactJson src={formJson} />
    </div>
  );
};

export default React.memo(Landing, () => true);
