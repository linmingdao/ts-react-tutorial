import { connect } from "react-redux";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import React, { useCallback } from "react";
import FormItem from "./FormItem";
import { sort } from "./store/actions/library";
import update from "immutability-helper";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { DndProvider } from "react-dnd";

const style: React.CSSProperties = {
  height: "100%",
  width: "100%",
  color: "#555",
  boxSizing: "border-box",
  textAlign: "center",
};

const FormPanel: React.FC = (props: any) => {
  const { preferences, sort } = props;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "FormPanel" }),
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

  // 排序
  const moveFormItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = preferences[dragIndex];
      sort(
        update(preferences, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [preferences, sort]
  );

  const renderFormItem = (
    item: { id: number; name: string },
    index: number
  ) => {
    return (
      <FormItem
        key={item.id}
        index={index}
        id={item.id}
        text={item.name}
        moveFormItem={moveFormItem}
      />
    );
  };

  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {preferences.map((item: any, i: number) => renderFormItem(item, i))}
    </div>
  );
};

export default connect(
  function mapStateToProps(state: any) {
    return {
      preferences: state.library.preferences,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      sort: (items: any) => dispatch(sort(items)),
    };
  }
)(FormPanel);
