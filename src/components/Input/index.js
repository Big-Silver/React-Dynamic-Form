import React from 'react';
import { Form, Input } from 'antd';
import './Input.less';

const DynamicInput = ({
  name,
  type,
  human_label,
  conditional = true,
  required = false,
}) => {
  const FormInput = () => {
    switch (type) {
      case 'password':
        return <Input.Password />;
      case 'search':
        return <Input.Search />;
      case 'textarea':
        return <Input.Area />;
      default:
        return <Input type={type} />;
    }
  };

  return (
    <>
      {conditional ? (
        <Form.Item
          name={name}
          label={human_label}
          rules={[{ required: required }]}
        >
          {FormInput()}
        </Form.Item>
      ) : null}
    </>
  );
};

export default DynamicInput;
