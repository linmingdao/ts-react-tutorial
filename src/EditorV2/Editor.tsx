import React, { useState } from "react";
import Toolbar from "./Toolbar";
import Templates from "./Templates";
import Stage from "./Stage";
import Attributes from "./Attributes";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

const Editor: React.FC = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="editor">
      {/* 工具栏 */}
      <Toolbar />
      <div className="content">
        {/* 模板列表 */}
        <Templates />
        {/* 布局编辑器 */}
        <Stage />
        {/* 展开、收起属性编辑器 */}
        <div className="colla-outline">
          <span className="colla" onClick={() => setCollapse(!collapse)}>
            {collapse ? (
              <DoubleRightOutlined style={{ fontSize: 15 }} translate="" />
            ) : (
              <DoubleLeftOutlined style={{ fontSize: 15 }} translate="" />
            )}
          </span>
        </div>
        {/* 组件属性编辑器 */}
        <Attributes collapse={collapse} />
      </div>
    </div>
  );
};

Editor.displayName = "Editor";

export default Editor;
