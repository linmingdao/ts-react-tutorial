import React from "react";
import { Row, Col, Input, Select, Form } from "antd";

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
  mode?: string; // tpl, stage, attr
}

const Stage: React.FC<StageProps> = ({ mode, label, name, placeholder }) => {
  function renderResult() {
    if (mode === "stage") {
      return (
        <Form
          {...layout}
          initialValues={{
            [name as string]: "okokoko",
          }}
          onValuesChange={() => {}}
        >
          <Form.Item label={label} name={name}>
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              placeholder={placeholder}
            />
          </Form.Item>
        </Form>
      );
    } else if (mode === "attr") {
      return (
        <Form {...layout} labelAlign="left" onValuesChange={() => {}}>
          <Form.Item label="label">
            <Input placeholder="请输入" />
          </Form.Item>
        </Form>
      );
    } else {
      return <div></div>;
    }
  }

  return renderResult();
};

Stage.defaultProps = {
  label: "应用下载地址",
  name: "address",
  placeholder: "Please input app address",
  mode: "stage",
};

Stage.displayName = "Stage";

export default Stage;
