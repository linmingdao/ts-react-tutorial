import React, { CSSProperties } from "react";
import classnames from "classnames";

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
      <div className="list"></div>
    </div>
  );
};

Attributes.displayName = "Attributes";

export default Attributes;
