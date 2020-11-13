import React from "react";
import { connect } from "react-redux";
import { add } from "./store/actions/library";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const style: React.CSSProperties = {
  width: "200px",
  height: "120px",
  lineHeight: "120px",
  backgroundColor: "#2cdcdc",
  padding: "5px",
  cursor: "move",
  margin: "10px",
  borderRadius: "5px",
};

interface BoxProps {
  name: string;
  preference: object;
  add: any;
}

const Box: React.FC<BoxProps> = (props) => {
  const { name, preference, add } = props;

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.BOX, preference },
    end: (
      item: { name: string; preference: any } | undefined,
      monitor: DragSourceMonitor
    ) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        add(item.preference.name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.3 : 1;

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};

export default connect(
  function mapStateToProps() {
    return {};
  },
  function mapDispatchToProps(dispatch) {
    return {
      add: (name: string) => dispatch(add(name)),
    };
  }
)(Box);
