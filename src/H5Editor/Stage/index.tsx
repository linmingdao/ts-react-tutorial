import React, { useContext, useCallback } from "react";
import { useDrop } from "react-dnd";
import { EditorContext } from "../index";
import SortableItem from "./SortableItem";
import DynamicEngine from "../DynamicEngine";

const Stage: React.FC = () => {
  const {
    stageItemList,
    currentProps,
    handleSelect,
    handlePropsChange,
  } = useContext(EditorContext);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "TemplateItem",
    drop: () => ({ name: "LayoutEditor" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // 高亮提示 开始拖拽 以及 可以完成拖拽放置
  const isActive = canDrop && isOver;
  let backgroundColor = "#f3f2f2a3";
  const $collaOutline: any = document.querySelector(".colla-outline");
  $collaOutline && ($collaOutline.style["backgroundColor"] = backgroundColor);
  if (isActive) {
    backgroundColor = "#1890ff80";
    $collaOutline && ($collaOutline.style["backgroundColor"] = backgroundColor);
  } else if (canDrop) {
    backgroundColor = "#1890ff5c";
    $collaOutline && ($collaOutline.style["backgroundColor"] = backgroundColor);
  }

  // 排序
  const moveFormItem = useCallback((dragIndex: number, hoverIndex: number) => {
    console.log(dragIndex, hoverIndex);
  }, []);

  function renderItem(item: any, index: number) {
    function handleValuesChange(changedValues: any, allValues: any) {
      handlePropsChange && handlePropsChange(changedValues, allValues, index);
    }

    return (
      <SortableItem
        key={item.id}
        id={item.id}
        index={index}
        moveFormItem={moveFormItem}
        onClick={() => handleSelect && handleSelect(index)}
      >
        <DynamicEngine
          componentType={item.type}
          componentName={item.name}
          mode="stage"
          onValuesChange={handleValuesChange}
          {...item.props}
          {...currentProps}
        />
      </SortableItem>
    );
  }

  return (
    <div ref={drop} className="stage" style={{ backgroundColor }}>
      {stageItemList.map((item, index) => renderItem(item, index))}
    </div>
  );
};

Stage.displayName = "Stage";

export default Stage;
