import React, { CSSProperties, useContext } from "react";
import classnames from "classnames";
import { EditorContext } from "../index";
import DynamicEngine from "../DynamicEngine";

interface IAttributes {
  collapse: boolean;
  className?: string;
  style?: CSSProperties;
}

const Attributes: React.FC<IAttributes> = (props) => {
  const className = classnames("attributes", { collapse: !props.collapse });
  const {
    currentIndex,
    currentProps,
    stageItemList,
    handlePropsChange,
  } = useContext(EditorContext);

  function renderAttr() {
    function handleValuesChange(changedValues: any, allValues: any) {
      handlePropsChange &&
        handlePropsChange(changedValues, allValues, currentIndex);
    }

    const config = stageItemList[currentIndex];
    return config ? (
      <div>
        <DynamicEngine
          key={currentIndex}
          componentType="Bricks"
          componentName={config.name}
          mode="attr"
          {...currentProps}
          onValuesChange={handleValuesChange}
        />
      </div>
    ) : (
      <div></div>
    );
  }

  return (
    <div className={className}>
      <div className="title">属性设置</div>
      <div className="list">{renderAttr()}</div>
    </div>
  );
};

Attributes.displayName = "Attributes";

export default Attributes;
