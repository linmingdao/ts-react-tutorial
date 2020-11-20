import React from "react";
import { Form, Input } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const UserPassword: React.FC = () => {
  return (
    <Form {...layout}>
      <Form.Item label="用户密码" name="password">
        <Input placeholder="用户密码" />
      </Form.Item>
    </Form>
  );
};

UserPassword.displayName = "UserPassword";

export default UserPassword;
