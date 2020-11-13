import React, { useRef } from "react";
import { connect } from "react-redux";
import { remove } from "./store/actions/library";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { XYCoord } from "dnd-core";

const style = {
  color: "#fff",
  borderRadius: "8px",
  border: "5px solid #fff",
  padding: "5px",
  backgroundColor: "#484848",
  cursor: "move",
};

export interface CardProps {
  id: any;
  text: string;
  index: number;
  remove: any;
  moveFormItem: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}
const FormItem: React.FC<CardProps> = ({
  id,
  text,
  index,
  remove,
  moveFormItem,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveFormItem(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}:{id}
      <span
        style={{
          display: "inline-block",
          height: 50,
          width: 100,
          backgroundColor: "red",
          float: "right",
          cursor: "pointer",
        }}
        onClick={() => remove(id)}
      >
        删除
      </span>
    </div>
  );
};

export default connect(
  function mapStateToProps() {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {
      remove: (id: string) => dispatch(remove(id)),
    };
  }
)(FormItem);
