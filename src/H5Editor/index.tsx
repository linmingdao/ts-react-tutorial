import React, { useState } from "react";
import { nanoid } from "nanoid";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Editor from "./Editor";
import "./index.css";

interface ITemplate {
  id: string;
  name: string;
  componentType: string;
  componentName: string;
}

type ComponentListFn = (componentType?: string) => ITemplate[];

const basic: ComponentListFn = (componentType = "Basics") => [
  {
    id: nanoid(),
    name: "Mysql数据源",
    componentType,
    componentName: "MysqlDataSourceSelect",
  },
  {
    id: nanoid(),
    name: "App下载地址",
    componentType,
    componentName: "AppDownloadAddressInput",
  },
  {
    id: nanoid(),
    name: "App下载地址1",
    componentType,
    componentName: "AppDownloadAddressInput",
  },
  {
    id: nanoid(),
    name: "App下载地址2",
    componentType,
    componentName: "AppDownloadAddressInput",
  },
  {
    id: nanoid(),
    name: "App下载地址3",
    componentType,
    componentName: "AppDownloadAddressInput",
  },
  {
    id: nanoid(),
    name: "App下载地址4",
    componentType,
    componentName: "AppDownloadAddressInput",
  },
];

const tmpl: ComponentListFn = (componentType = "Templates") => [
  {
    id: nanoid(),
    name: "用户登录",
    componentType,
    componentName: "LoginForm",
  },
  {
    id: nanoid(),
    name: "找回密码",
    componentType,
    componentName: "ForgottenPassword",
  },
  {
    id: nanoid(),
    name: "找回密码",
    componentType,
    componentName: "ForgottenPassword",
  },
  {
    id: nanoid(),
    name: "找回密码",
    componentType,
    componentName: "ForgottenPassword",
  },
  {
    id: nanoid(),
    name: "找回密码",
    componentType,
    componentName: "ForgottenPassword",
  },
  {
    id: nanoid(),
    name: "找回密码",
    componentType,
    componentName: "ForgottenPassword",
  },
  {
    id: nanoid(),
    name: "找回密码",
    componentType,
    componentName: "ForgottenPassword",
  },
  {
    id: nanoid(),
    name: "找回密码",
    componentType,
    componentName: "ForgottenPassword",
  },
];

const business: ComponentListFn = (componentType = "Businesses") => [
  {
    id: nanoid(),
    name: "EC2机器申请",
    componentType,
    componentName: "EC2Machine",
  },
  {
    id: nanoid(),
    name: "Apollo配置操作",
    componentType,
    componentName: "ApolloConfig",
  },
  {
    id: nanoid(),
    name: "EC2机器申请",
    componentType,
    componentName: "EC2Machine",
  },
  {
    id: nanoid(),
    name: "Apollo配置操作",
    componentType,
    componentName: "ApolloConfig",
  },
  {
    id: nanoid(),
    name: "EC2机器申请",
    componentType,
    componentName: "EC2Machine",
  },
  {
    id: nanoid(),
    name: "Apollo配置操作",
    componentType,
    componentName: "ApolloConfig",
  },
  {
    id: nanoid(),
    name: "EC2机器申请",
    componentType,
    componentName: "EC2Machine",
  },
  {
    id: nanoid(),
    name: "Apollo配置操作",
    componentType,
    componentName: "ApolloConfig",
  },
  {
    id: nanoid(),
    name: "EC2机器申请",
    componentType,
    componentName: "EC2Machine",
  },
  {
    id: nanoid(),
    name: "Apollo配置操作",
    componentType,
    componentName: "ApolloConfig",
  },
];

export enum Category {
  Basics = 0,
  Templates,
  Businesses,
}

type SelectedCallback = (selectedIndex: number) => void;
type SelectedCallbackRetList = (selectedIndex: number) => any[];
type NoSelectedCallback = () => void;

interface IEditorContext {
  basics: ITemplate[];
  templates: ITemplate[];
  businesses: ITemplate[];
  defaultCategory: Category;
  currentIndex?: number;
  currentPreferences: any[];
  getCategoryComponents: SelectedCallbackRetList;
  handleDrop?: (item: any) => void;
  handleCopy?: SelectedCallback;
  handleRemove?: SelectedCallback;
  handleSelect?: SelectedCallback;
  handleClear?: NoSelectedCallback;
  handleReset?: NoSelectedCallback;
  handleUndo?: NoSelectedCallback;
  handleRedo?: NoSelectedCallback;
  handleSave?: NoSelectedCallback;
}

export const EditorContext = React.createContext<IEditorContext>({
  getCategoryComponents() {
    return [];
  },
  defaultCategory: Category.Basics,
  basics: [],
  templates: [],
  businesses: [],
  currentIndex: 0,
  currentPreferences: [],
});

interface IH5EditorProps {
  defaultPreferences?: any[];
  defaultIndex?: number;
  onChange?: NoSelectedCallback;
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
    basics: basic(),
    templates: tmpl(),
    businesses: business(),
    defaultCategory: Category.Basics,
    currentIndex: currentIndex,
    currentPreferences: currentPreferences ? currentPreferences : [],
    getCategoryComponents(category: number) {
      switch (category) {
        case Category.Basics:
          return passedContext.basics;

        case Category.Templates:
          return passedContext.templates;
        case Category.Businesses:
          return passedContext.businesses;
        default:
          return [];
      }
    },
    handleDrop(item: any) {
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