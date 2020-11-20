import React, { useContext, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import List from "./List";
import Item from "./Item";
import { EditorContext } from "../index";
import { UniformTmplGroupList } from "../types";
import { getUniformTmplGroupList } from "../helper";

const Templates: React.FC = () => {
  const { brickTemplate, buildingTemplateGroupList } = useContext(
    EditorContext
  );
  const tmplGroupList: UniformTmplGroupList = getUniformTmplGroupList(
    brickTemplate,
    buildingTemplateGroupList
  );
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentComponents, setCurrentComponents] = useState(
    tmplGroupList[0]["components"]
  );
  const handleSelect = (item: any) => {
    setCurrentGroupIndex(item.key);
    setCurrentComponents(tmplGroupList[item.key]["components"]);
  };

  return (
    <div className="templates">
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed
        onSelect={handleSelect}
        style={{ height: "100%", width: 44, borderColor: "#dcdcdc" }}
        defaultSelectedKeys={["0"]}
      >
        {tmplGroupList.map((item, index) => (
          <Menu.Item
            key={index}
            icon={item.icon ? item.icon : <SettingOutlined translate="" />}
          />
        ))}
      </Menu>
      <div className="category">
        <div className="title">{tmplGroupList[currentGroupIndex]["title"]}</div>
        <List>
          {currentComponents.map((item: any) => (
            <Item key={item.name} config={item} />
          ))}
        </List>
      </div>
    </div>
  );
};

Templates.displayName = "Templates";

export default Templates;
