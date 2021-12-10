import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import DynamicForm from '../../../components/Form/index.js';

import { data } from '../../../data/data.js';
import './Landing.less';

const Landing = () => {
  const json = data();
  const [formJson, setFormJson] = useState({});
  const [fields, setFields] = useState([]);

  const onFinish = (e) => {
    setFormJson(e);
  };

  return (
    <div className="dynamic-landing">
      <DynamicForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
        onFinish={(e) => onFinish(e)}
        json={json}
      />
      <ReactJson src={fields} />
      <ReactJson src={formJson} />
    </div>
  );
};

export default React.memo(Landing, () => true);
