import React, { CSSProperties } from "react";
import classnames from "classnames";
import { Row, Col, Input } from "antd";

interface IAttributes {
  collapse: boolean;
  className?: string;
  style?: CSSProperties;
}

const Attributes: React.FC<IAttributes> = (props) => {
  const className = classnames("attributes", { collapse: !props.collapse });

  return (
    <div className={className}>
      <div className="title">属性设置</div>
      <div className="list">
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            用户名Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            密码Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            用户名Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            密码Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            用户名Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            密码Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            用户名Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            密码Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            用户名Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
        <Row gutter={[0, 10]}>
          <Col span={12} className="left-col">
            密码Tips
          </Col>
          <Col span={12} className="right-col">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

Attributes.displayName = "Attributes";

export default Attributes;
