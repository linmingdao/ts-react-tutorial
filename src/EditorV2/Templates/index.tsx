import React, { useContext, useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import List from "./List";
import Item from "./Item";
import { EditorContext } from "../index";

const CategoryText = ["基础组件", "模板组件", "业务组件"];

const Templates: React.FC = () => {
  const { defaultCategory, getCategoryComponents } = useContext(EditorContext);
  const [currentCategory, setCurrentCategory] = useState(defaultCategory);
  const [currentCategoryComponents, setCurrentCategoryComponents] = useState(
    getCategoryComponents(currentCategory)
  );
  const handleSelect = (item: any) => {
    setCurrentCategory(Number(item.key));
    setCurrentCategoryComponents(getCategoryComponents(Number(item.key)));
  };

  return (
    <div className="templates">
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed
        onSelect={handleSelect}
        style={{ height: "100%", width: 44 }}
        defaultSelectedKeys={["" + currentCategory]}
      >
        <Menu.Item key="0" icon={<SettingOutlined translate="" />}>
          {CategoryText[0]}
        </Menu.Item>
        <Menu.Item key="1" icon={<AppstoreOutlined translate="" />}>
          {CategoryText[1]}
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined translate="" />}>
          {CategoryText[2]}
        </Menu.Item>
      </Menu>
      <div className="category">
        <div className="title">{CategoryText[currentCategory]}</div>
        <List>
          {currentCategoryComponents.map((item: any) => (
            <Item key={item.id} config={item} />
          ))}
        </List>
      </div>
    </div>
  );
};

Templates.displayName = "Templates";

export default Templates;
