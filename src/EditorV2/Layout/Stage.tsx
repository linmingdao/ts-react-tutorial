import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { EditorContext } from "../index";
import BasicForm from "../Components/BasicForm";

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
