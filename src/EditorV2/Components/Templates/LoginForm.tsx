import React from "react";
import { Form, Input } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const LoginForm: React.FC = () => {
  return (
    <Form {...layout}>
      <Form.Item label="用户名" name="username">
        <Input placeholder="请输入用户名" />
      </Form.Item>

      <Form.Item label="密码" name="password">
        <Input.Password placeholder="请输入密码" />
      </Form.Item>
    </Form>
  );
};

LoginForm.displayName = "LoginForm";

export default LoginForm;
