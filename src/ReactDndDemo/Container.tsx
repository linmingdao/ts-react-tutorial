import React, { memo } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Dustbin } from "./Dustbin";
import { Box } from "./Box";

export const Container: React.FC = memo(function Container() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: 840,
          height: 400,
          marginTop: 50,
          backgroundColor: "#fff",
        }}
      >
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Dustbin />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    </DndProvider>
  );
});
