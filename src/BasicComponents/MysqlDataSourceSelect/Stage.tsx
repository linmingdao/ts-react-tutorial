import React from "react";
import { Select, Form } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const MysqlDataSourceSelect: React.FC = () => {
  return (
    <Form {...layout}>
      <Form.Item label="Mysql数据源" name="address">
        <Select style={{ width: "100%" }} placeholder="请选择数据源">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default MysqlDataSourceSelect;
