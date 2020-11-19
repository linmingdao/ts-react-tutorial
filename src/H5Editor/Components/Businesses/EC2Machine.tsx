import React from "react";
import { Form, Input, DatePicker, Select } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const EC2Machine: React.FC = () => {
  return (
    <Form {...layout}>
      <Form.Item label="标题" name="title">
        <Input placeholder="请输入工单的标题或原因" />
      </Form.Item>
      <Form.Item label="开始运行" name="runtime">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="环境" name="env">
        <Select style={{ width: "100%" }} placeholder="选择所属环境">
          <Option value="jack">北京测试</Option>
          <Option value="lucy">宁夏测试</Option>
          <Option value="disabled" disabled>
            北京正式
          </Option>
          <Option value="Yiminghe">宁夏正式</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

EC2Machine.displayName = "EC2Machine";

export default EC2Machine;
