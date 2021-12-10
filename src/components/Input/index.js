import React from 'react';
import { Form, Input } from 'antd';

const DynamicInput = ({ name, type, human_label, conditional = true }) => {
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
        <Form.Item name={name} label={human_label}>
          {FormInput()}
        </Form.Item>
      ) : null}
    </>
  );
};

export default DynamicInput;
