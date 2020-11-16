import React, { useContext } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import TemplatesList from "./TemplatesList";
import LayoutEditor from "./LayoutEditor";
import AttrsEditor from "./AttrsEditor";

import TemplateItem from "./TemplateItem";

import { EditorContext } from "./index";

const Editor: React.FC = () => {
  const { templates } = useContext(EditorContext);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="editor">
        {/* 模板列表 */}
        <TemplatesList>
          {templates.map((item: any) => (
            <TemplateItem key={item.id} config={item} />
          ))}
        </TemplatesList>
        {/* 布局编辑器 */}
        <LayoutEditor />
        {/* 组件属性编辑器 */}
        <AttrsEditor />
      </div>
    </DndProvider>
  );
};

Editor.displayName = "Editor";

export default Editor;
