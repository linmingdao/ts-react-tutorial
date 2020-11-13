import React, { Component } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import "./index.css";

const SortableItem = SortableElement(({ value }) => (
  <li style={{ backgroundColor: "red", borderBottom: "1px solid #fff" }}>
    {value}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem
          className="sortable-item"
          key={`item-${value}`}
          index={index}
          value={value}
        />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <div
        className="sortable-box"
        style={{
          width: 840,
          height: 400,
          marginTop: 50,
          backgroundColor: "#fff",
        }}
      >
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default SortableComponent;
