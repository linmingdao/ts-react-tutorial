import React, { useContext } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { EditorContext } from "../index";

interface Config {
  id: string;
  name: string;
  type: string;
}

interface ItemProps {
  config: Config;
}

const Item: React.FC<ItemProps> = (props) => {
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

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} className="item" style={{ opacity }}>
      <div className="preview"></div>
      <div className="name">{name}</div>
    </div>
  );
};

Item.displayName = "Item";

export default Item;
