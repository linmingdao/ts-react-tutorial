import React from "react";
import { Form, Input } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const UserName: React.FC = () => {
  return (
    <Form {...layout}>
      <Form.Item label="用户名" name="username">
        <Input placeholder="请输入用户名" />
      </Form.Item>
    </Form>
  );
};

UserName.displayName = "UserName";

export default UserName;
