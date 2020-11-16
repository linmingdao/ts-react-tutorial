import React, { useContext } from "react";
import { Button } from "antd";
import { useDrop } from "react-dnd";
import { EditorContext } from "./index";
import BasicForm from "./BasicComponents/BasicForm";

const LayoutEditor: React.FC = () => {
  const {
    currentPreferences,
    handleSelect,
    handleClear,
    handleRedo,
    handleReset,
    handleUndo,
    handleSave,
  } = useContext(EditorContext);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "TemplateItem",
    drop: () => ({ name: "LayoutEditor" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let backgroundColor = "#fff";
  if (isActive) {
    backgroundColor = "#ffa3a3";
  } else if (canDrop) {
    backgroundColor = "#e2cfcf";
  }

  function renderItem(item: any, index: number) {
    return (
      <div
        key={item.id}
        className="form-wrapper"
        onClick={() => handleSelect && handleSelect(index)}
      >
        <BasicForm />
      </div>
    );
  }

  return (
    <div className="layout-editor">
      <div className="toolbar">
        <Button type="link" onClick={() => handleUndo && handleUndo()}>
          撤 销
        </Button>
        <Button type="link" onClick={() => handleRedo && handleRedo()}>
          恢 复
        </Button>
        <Button type="link" onClick={() => handleSave && handleSave()}>
          保 存
        </Button>
        <Button type="link" onClick={() => handleReset && handleReset()}>
          重 置
        </Button>
        <Button type="link" onClick={() => handleClear && handleClear()}>
          清空面板
        </Button>
      </div>
      <div ref={drop} className="stage" style={{ backgroundColor }}>
        {currentPreferences.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

LayoutEditor.displayName = "LayoutEditor";

export default LayoutEditor;
