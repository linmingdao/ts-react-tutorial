import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import H5Editor from "./H5Editor";
import {
  AppstoreOutlined,
  SettingOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

// label, field, type(antd对应的基础表单组件 和 自定义的业务组件)，必填，palceholder，value

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

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <H5Editor
            brickTemplate={{
              icon: <SettingOutlined translate="" />,
              loader: (name: string) => () =>
                import(`./BasicComponents/${name}`),
              getComponents: () => [
                {
                  label: "Mysql数据源",
                  name: "MysqlDataSourceSelect",
                  props: {
                    label: "数据源",
                    name: "source",
                    value: "",
                    placeholder: "请选择数据源",
                  },
                },
                // {
                //   label: "App下载地址",
                //   name: "AppDownloadAddressInput",
                //   props: {
                //     placeholder: "哈哈我额",
                //   },
                // },
              ],
            }}
            buildingTemplateGroupList={[
              {
                icon: <AppstoreOutlined translate="" />,
                group: "Templates",
                title: "模板组件",
                getComponents: () => [
                  {
                    id: "232nobi13o1234n",
                    label: "用户登录",
                    composes: [
                      { type: "Bricks:UserName" },
                      { type: "Bricks:UserPassword" },
                    ],
                  },
                  {
                    id: "839sjwwl2ll24nn",
                    label: "确认密码",
                    composes: [
                      { type: "Bricks:UserPassword" },
                      { type: "Bricks:UserPassword" },
                    ],
                  },
                ],
                updateComponents: () => {},
              },
              {
                icon: <PieChartOutlined translate="" />,
                group: "Businesses",
                title: "业务组件",
                getComponents: () => [
                  {
                    id: "ew892jlasdl2229jj2",
                    label: "设置下载地址",
                    composes: [
                      { type: "Bricks:AppDownloadAddressInput" },
                      { type: "Templates:232nobi13o1234n" },
                    ],
                  },
                  {
                    id: "fakks2325landsawl22",
                    label: "设置Apollo数据源",
                    composes: [
                      { type: "Bricks:MysqlDataSourceSelect" },
                      { type: "Templates:232nobi13o1234n" },
                      { type: "Businesses:ew892jlasdl2229jj2" },
                    ],
                  },
                ],
                updateComponents: () => {},
              },
            ]}
          />
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
