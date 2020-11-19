import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import H5Editor from "./H5Editor";
import { nanoid } from "nanoid";
import { ITemplate } from "./H5Editor/index";

interface IThemeProps {
  [key: string]: { color: string; background: string };
}

const themes: IThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};

export const ThemeContext = React.createContext(themes.light);

const basics: ITemplate[] = [
  {
    id: nanoid(),
    name: "Mysql数据源",
    componentType: "Basics",
    componentName: "MysqlDataSourceSelect",
  },
  {
    id: nanoid(),
    name: "App下载地址",
    componentType: "Basics",
    componentName: "AppDownloadAddressInput",
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          {/* 1 基础组件注入，这个是存在于各自项目的基础组件集合 */}
          {/* 2 由基础组件生成的模板、业务组件，这个需要远程拉取 JSON 信息，所以需要提供一个专门把 JSON 数据转成 组件的模块 */}
          <H5Editor
            loader={(name: string) => () => import(`./BasicComponents/${name}`)}
            basics={basics}
            save={() => {
              console.log("call save handler");
            }}
          />
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
