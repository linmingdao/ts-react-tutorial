import React from "react";
import { Form, Input } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const ForgottenPassword: React.FC = () => {
  return (
    <Form {...layout}>
      <Form.Item label="原始密码" name="password1">
        <Input placeholder="请输入原始密码" />
      </Form.Item>
      <Form.Item label="确认密码" name="password2">
        <Input placeholder="再次确认密码" />
      </Form.Item>
    </Form>
  );
};

ForgottenPassword.displayName = "ForgottenPassword";

export default ForgottenPassword;
