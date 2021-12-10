import React, { useContext, useState } from 'react';
import { Typography } from 'antd';
import ReactJson from 'react-json-view';
import ApplicationContext from '../../context/ApplicationContext.js';
import DynamicForm from '../../components/Form/index.js';
import JsonView from '../../components/JsonView/index.js';
import './Landing.less';

const LandingUI = () => {
  const { Title } = Typography;
  const { json } = useContext(ApplicationContext);
  const [formJson, setFormJson] = useState([]);
  const [fields, setFields] = useState([]);

  const onFinish = (e) => {
    setFormJson(e);
  };

  const onFormChange = (newFields) => {
    setFields(newFields);
  };

  return (
    <div className="dynamic-landing">
      <div className="dynamic-form-views">
        <div className="dynamic-form-view">
          <Title level={5}>Form</Title>
          <DynamicForm
            json={json}
            onChange={onFormChange}
            onFinish={onFinish}
          />
        </div>
        <div className="dynamic-form-view">
          <Title level={5}>Source</Title>
          <ReactJson theme="monokai" src={json} />
        </div>
      </div>

      <div className="dynamic-form-views">
        <div className="dynamic-form-view">
          <Title level={5}>Fields</Title>
          <JsonView theme="monokai" src={fields} />
        </div>
        <div className="dynamic-form-view">
          <Title level={5}>Result</Title>
          <JsonView theme="monokai" src={formJson} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(LandingUI, () => true);
// export default LandingUI;
