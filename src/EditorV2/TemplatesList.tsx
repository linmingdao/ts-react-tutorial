import React from "react";

const TemplatesList: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="templates-list">
      <div className="title">组件模板库</div>
      <div className="list">{children}</div>
    </div>
  );
};

TemplatesList.displayName = "TemplatesList";

export default TemplatesList;
