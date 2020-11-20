import React from "react";
import { Input, Select, Form } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);

const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

interface StageProps {
  label?: string;
  name?: string;
  placeholder?: string;
}

const Stage: React.FC<StageProps> = ({ label, name, placeholder }) => {
  return (
    <Form {...layout}>
      <Form.Item label={label} name={name}>
        <Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          placeholder={placeholder}
        />
      </Form.Item>
    </Form>
  );
};

Stage.defaultProps = {
  label: "应用下载地址",
  name: "address",
  placeholder: "Please input app address",
};

Stage.displayName = "Stage";

export default Stage;
