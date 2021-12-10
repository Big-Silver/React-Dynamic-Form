import React from 'react';
import { Form, Checkbox } from 'antd';
import './Checkbox.less';

const DynamicCheckbox = ({
  name,
  human_label,
  conditional = true,
  required = false,
}) => {
  return (
    <>
      {conditional ? (
        <Form.Item
          name={name}
          valuePropName="checked"
          rules={[{ required: required }]}
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>{human_label}</Checkbox>
        </Form.Item>
      ) : null}
    </>
  );
};

export default DynamicCheckbox;
