import React, { useContext } from "react";
import List from "./List";
import Item from "./Item";
import { EditorContext } from "../index";

const Templates: React.FC = () => {
  const { templates } = useContext(EditorContext);
  return (
    <div className="templates-list">
      <div className="title">组件模板库</div>
      <List>
        {templates.map((item: any) => (
          <Item key={item.id} config={item} />
        ))}
      </List>
    </div>
  );
};

Templates.displayName = "Templates";

export default Templates;
