import React, { useContext } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { EditorContext } from "./index";

interface Config {
  id: string;
  name: string;
  type: string;
}

interface TempateItemProps {
  config: Config;
}

const TemplateItem: React.FC<TempateItemProps> = (props) => {
  const { name } = props.config;
  const { handleDrop } = useContext(EditorContext);

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "TemplateItem", config: props.config },
    end: (
      item: { name: string; type: string; config: any } | undefined,
      monitor: DragSourceMonitor
    ) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleDrop && handleDrop({ ...item.config });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;
  const cursor = isDragging ? "grabbing" : "move";

  return (
    <div ref={drag} className="template-item" style={{ opacity, cursor }}>
      <div className="template-preview"></div>
      <div className="template-name">{name}</div>
    </div>
  );
};

TemplateItem.displayName = "TemplateItem";

export default TemplateItem;
