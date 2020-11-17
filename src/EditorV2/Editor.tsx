import React from "react";
import Templates from "./Templates";
import Layout from "./Layout";
import Attributes from "./Attributes";
import "./Editor.css";

const Editor: React.FC = () => {
  return (
    <div className="editor">
      {/* 模板列表 */}
      <Templates />
      {/* 布局编辑器 */}
      <Layout />
      {/* 组件属性编辑器 */}
      <Attributes />
    </div>
  );
};

Editor.displayName = "Editor";

export default Editor;
