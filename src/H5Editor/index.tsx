import React, { useState } from "react";
import { nanoid } from "nanoid";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Editor from "./Editor";
import { H5EditorProps, H5EditorContext, StageItem } from "./types";
import "./index.css";

export const EditorContext = React.createContext<H5EditorContext>({
  brickTemplate: {
    loader: (name: string) => [],
  },
  buildingTemplateGroupList: [],
  stageItemList: [],
});

const H5Editor: React.FC<H5EditorProps> = ({
  brickTemplate,
  buildingTemplateGroupList,
}) => {
  const [stageItemList, setStageItemList] = useState([] as StageItem[]);
  const passedContext: H5EditorContext = {
    brickTemplate,
    buildingTemplateGroupList,
    stageItemList,
    handleDrop(item) {
      console.log(item);
      setStageItemList([...stageItemList, { ...item, id: nanoid() }]);
    },
    handleSelect(selectedIndex: number) {},
    handleCopy(selectedIndex: number) {
      console.log("handleCopy", "selectedIndex", selectedIndex);
    },
    handleRemove(selectedIndex: number) {
      console.log("handleRemove", "selectedIndex", selectedIndex);
    },
    handleClear() {
      setStageItemList([]);
    },
    handleReset() {
      console.log("handleReset");
    },
    handleRedo() {
      console.log("handleRedo");
    },
    handleUndo() {
      console.log("handleUndo");
    },
    handleSave() {
      console.log("handleSave");
    },
  };

  return (
    <EditorContext.Provider value={passedContext}>
      <DndProvider backend={HTML5Backend}>
        <Editor />
      </DndProvider>
    </EditorContext.Provider>
  );
};

H5Editor.displayName = "H5Editor";

export default H5Editor;
