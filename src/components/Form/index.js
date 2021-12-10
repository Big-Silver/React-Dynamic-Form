import React, { useCallback } from 'react';
import { Form, Button } from 'antd';
import DynamicInput from '../Input/index.js';
import { getConditional } from '../../utils/sdk.js';

const DynamicForm = ({ json, onFinish, onChange, fields }) => {
  const [form] = Form.useForm();

  const getCondition = useCallback(
    (info) => {
      return getConditional(json, fields, info);
    },
    [json, fields]
  );

  return (
    <Form
      form={form}
      onFinish={onFinish}
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}
    >
      {json.map((d, i) => (
        <DynamicInput
          key={`dynamic_input_${i}`}
          name={d.name}
          type={d.type}
          human_label={d.human_label}
          conditional={getCondition(d)}
        />
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
