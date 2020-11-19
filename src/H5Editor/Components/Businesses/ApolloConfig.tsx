import React from "react";
import { Form, Input, DatePicker } from "antd";
const { TextArea } = Input;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const ApolloConfig: React.FC = () => {
  return (
    <Form {...layout}>
      <Form.Item label="标题" name="title">
        <Input placeholder="请输入工单的标题或原因" />
      </Form.Item>
      <Form.Item label="开始运行" name="runtime">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="APP" name="app">
        <Input placeholder="请输入Apollo App，例如store" />
      </Form.Item>
      <Form.Item label="命名空间" name="namespace">
        <Input placeholder="请输入命名空间 application/pupu.xxxx 等" />
      </Form.Item>
      <Form.Item label="键" name="key">
        <Input placeholder="请输入Key" />
      </Form.Item>
      <Form.Item label="值" name="val">
        <Input placeholder="请输入Value" />
      </Form.Item>
      <Form.Item label="工单备注" name="remark">
        <TextArea rows={4} placeholder="请输入工单备注" />
      </Form.Item>
    </Form>
  );
};

ApolloConfig.displayName = "ApolloConfig";

export default ApolloConfig;
