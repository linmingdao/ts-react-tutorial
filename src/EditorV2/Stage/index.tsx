import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { EditorContext } from "../index";
import BasicForm from "../Components/Templates/BasicForm";

const Stage: React.FC = () => {
  const { currentPreferences, handleSelect } = useContext(EditorContext);
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

  function renderItem(item: any, index: number) {
    return (
      <div
        key={item.id}
        style={{ backgroundColor: "#fff" }}
        className="form-wrapper"
        onClick={() => handleSelect && handleSelect(index)}
      >
        <BasicForm />
      </div>
    );
  }

  return (
    <div ref={drop} className="stage" style={{ backgroundColor }}>
      {currentPreferences.map((item, index) => renderItem(item, index))}
    </div>
  );
};

Stage.displayName = "Stage";

export default Stage;
