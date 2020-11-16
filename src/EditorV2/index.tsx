import React, { useState } from "react";
import { nanoid } from "nanoid";
import Editor from "./Editor";
import "./index.css";

const tmpl = [
  { id: nanoid(), name: "轮播图组件", type: "lbt" },
  { id: nanoid(), name: "页脚组件", type: "yj" },
  { id: nanoid(), name: "表格组件", type: "bg" },
  { id: nanoid(), name: "页头组件", type: "yt" },
  { id: nanoid(), name: "轮播图组件", type: "lbt" },
  { id: nanoid(), name: "页脚组件", type: "yj" },
  { id: nanoid(), name: "表格组件", type: "bg" },
  { id: nanoid(), name: "页头组件", type: "yt" },
  { id: nanoid(), name: "轮播图组件", type: "lbt" },
  { id: nanoid(), name: "页脚组件", type: "yj" },
  { id: nanoid(), name: "表格组件", type: "bg" },
  { id: nanoid(), name: "页头组件", type: "yt" },
  { id: nanoid(), name: "轮播图组件", type: "lbt" },
  { id: nanoid(), name: "页脚组件", type: "yj" },
  { id: nanoid(), name: "表格组件", type: "bg" },
  { id: nanoid(), name: "页头组件", type: "yt" },
  { id: nanoid(), name: "轮播图组件", type: "lbt" },
  { id: nanoid(), name: "页脚组件", type: "yj" },
  { id: nanoid(), name: "表格组件", type: "bg" },
  { id: nanoid(), name: "页头组件", type: "yt" },
];

interface ITemplate {
  id: string;
  name: string;
  type: string;
}

type SelectedCallback = (selectedIndex: number) => void;

interface IEditorContext {
  templates: ITemplate[];
  currentIndex?: number;
  currentPreferences: any[];
  handleDrop?: (item: any) => void;
  handleCopy?: SelectedCallback;
  handleRemove?: SelectedCallback;
  handleSelect?: SelectedCallback;
  handleClear?: () => void;
}

export const EditorContext = React.createContext<IEditorContext>({
  templates: [],
  currentIndex: 0,
  currentPreferences: [],
});

interface IH5EditorProps {
  defaultPreferences?: any[];
  defaultIndex?: number;
  onChange?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const H5Editor: React.FC<IH5EditorProps> = (props) => {
  const { defaultPreferences, defaultIndex } = props;
  const [currentPreferences, setCurrentPreferences] = useState(
    defaultPreferences
  );
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  const passedContext: IEditorContext = {
    templates: tmpl,
    currentIndex: currentIndex,
    currentPreferences: currentPreferences ? currentPreferences : [],
    handleDrop(item: any) {
      console.log("handleDrop", "item", item);
      if (currentPreferences) {
        setCurrentPreferences([
          ...currentPreferences,
          { ...item, id: nanoid() },
        ]);
      } else {
        setCurrentPreferences([{ ...item, id: nanoid() }]);
      }
    },
    handleSelect(selectedIndex: number) {
      console.log("handleSelect", "selectedIndex", selectedIndex);
      setCurrentIndex(selectedIndex);
    },
    handleCopy(selectedIndex: number) {
      console.log("handleCopy", "selectedIndex", selectedIndex);
    },
    handleRemove(selectedIndex: number) {
      console.log("handleRemove", "selectedIndex", selectedIndex);
    },
    handleClear() {
      console.log("handleClear");
      setCurrentPreferences([]);
    },
  };

  return (
    <EditorContext.Provider value={passedContext}>
      <Editor />
    </EditorContext.Provider>
  );
};

H5Editor.displayName = "H5Editor";

export default H5Editor;