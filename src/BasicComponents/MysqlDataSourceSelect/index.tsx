import React from "react";
import { Select, Form, Input } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

interface MysqlDataSourceSelectProps {
  label?: string;
  name?: string;
  placeholder?: string;
  mode?: string; // tpl, stage, attr
  onValuesChange: (changedValues: any, allValues: any) => void;
}

const MysqlDataSourceSelect: React.FC<MysqlDataSourceSelectProps> = ({
  mode,
  label,
  name,
  placeholder,
  onValuesChange,
}) => {
  function renderResult() {
    function handleValuesChange(changedValues: any, allValues: any) {
      onValuesChange(changedValues, allValues);
    }

    if (mode === "stage") {
      return (
        <Form {...layout} onValuesChange={handleValuesChange}>
          <Form.Item label={label} name={name}>
            <Select style={{ width: "100%" }} placeholder={placeholder}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
        </Form>
      );
    } else if (mode === "attr") {
      return (
        <Form {...layout} labelAlign="left" onValuesChange={handleValuesChange}>
          <Form.Item label="placeholder" name="placeholder">
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

MysqlDataSourceSelect.defaultProps = {
  label: "数据源",
  name: "source",
  placeholder: "请选择数据源",
  mode: "stage",
};

export default MysqlDataSourceSelect;
