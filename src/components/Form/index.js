import React from 'react';
import { Form, Button } from 'antd';
import DynamicInput from '../Input/index.js';

const DynamicForm = ({ json, onFinish, onChange, fields }) => {
  const [form] = Form.useForm();

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
