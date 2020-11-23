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
  currentIndex: -1,
  currentProps: {},
});

const H5Editor: React.FC<H5EditorProps> = ({
  brickTemplate,
  buildingTemplateGroupList,
}) => {
  const [stageItemList, setStageItemList] = useState<StageItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [currentProps, setCurrentProps] = useState<any>(null);
  const passedContext: H5EditorContext = {
    brickTemplate,
    buildingTemplateGroupList,
    stageItemList,
    currentIndex,
    currentProps,
    handlePropsChange(
      changedValues: any,
      allValues: any,
      selectedIndex: number
    ) {
      setCurrentProps({
        ...currentProps,
        ...allValues,
      });
      setStageItemList(
        stageItemList.map((item, index) => {
          if (index === selectedIndex) {
            return {
              ...item,
              props: {
                ...item["props"],
                ...allValues,
              },
            };
          } else {
            return item;
          }
        })
      );
    },
    handleSelect(selectedIndex: number) {
      setCurrentProps(stageItemList[selectedIndex].props);
      setCurrentIndex(selectedIndex);
    },
    handleDrop(item) {
      setStageItemList([...stageItemList, { ...item, id: nanoid() }]);
    },
    handleClear() {
      setStageItemList([]);
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
