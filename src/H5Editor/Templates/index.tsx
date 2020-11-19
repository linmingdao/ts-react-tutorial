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

const MenuItems = [
  { title: "基础组件", icon: <SettingOutlined translate="" /> },
  { title: "模板组件", icon: <AppstoreOutlined translate="" /> },
  { title: "业务组件", icon: <PieChartOutlined translate="" /> },
];

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
        style={{ height: "100%", width: 44, borderColor: "#dcdcdc" }}
        defaultSelectedKeys={["" + currentCategory]}
      >
        {MenuItems.map((item, index) => (
          <Menu.Item key={index} icon={item.icon} />
        ))}
      </Menu>
      <div className="category">
        <div className="title">{MenuItems[currentCategory].title}</div>
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
