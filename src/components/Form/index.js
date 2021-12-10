import React, { useCallback, useState } from 'react';
import { Form, Button, Typography } from 'antd';
import { debounce } from 'lodash';
import DynamicInput from '../Input/index.js';
import DynamicCheckbox from '../Checkbox/index.js';
import { getConditional } from '../../utils/sdk.js';
import './Form.less';

const defaultFormItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const defaultTailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Inputs = ({ json, fields }) => {
  const getCondition = useCallback(
    (info) => {
      return getConditional(json, fields, info);
    },
    [json, fields]
  );

  return json.map((d, i) =>
    d.type === 'checkbox' ? (
      <DynamicCheckbox
        key={`dynamic_checkbox_${i}`}
        name={d.name}
        human_label={d.human_label}
        conditional={getCondition(d)}
        required={d.required}
      />
    ) : (
      <DynamicInput
        key={`dynamic_input_${i}`}
        name={d.name}
        type={d.type}
        human_label={d.human_label}
        conditional={getCondition(d)}
        required={d.required}
      />
    )
  );
};

const DynamicForm = ({ json, onFinish, onChange }) => {
  const [form] = Form.useForm();
  const { Text } = Typography;
  const [fields, setFields] = useState([]);

  const onReset = () => {
    form.resetFields();
    onChange([]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChange = useCallback(
    debounce((allFields) => onChange(allFields), 1000),
    []
  );

  const onFieldsChange = (_, allFields) => {
    setFields(allFields);
    debouncedChange(allFields);
  };

  return (
    <div className="dynamic-form">
      {json.length ? (
        <Form
          {...defaultFormItemLayout}
          form={form}
          onFinish={onFinish}
          fields={fields}
          onFieldsChange={onFieldsChange}
        >
          <Inputs json={json} fields={fields} />
          <Form.Item {...defaultTailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Text type="warning">Empty Field</Text>
      )}
    </div>
  );
};

export default DynamicForm;
