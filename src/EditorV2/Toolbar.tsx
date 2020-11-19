import React, { useContext } from "react";
import { Button } from "antd";
import { EditorContext } from "./index";

const Toolbar: React.FC = () => {
  const {
    handleClear,
    handleRedo,
    handleReset,
    handleUndo,
    handleSave,
  } = useContext(EditorContext);

  return (
    <div className="toolbar">
      <Button type="link" onClick={() => handleUndo && handleUndo()}>
        撤 销
      </Button>
      <Button type="link" onClick={() => handleRedo && handleRedo()}>
        恢 复
      </Button>
      <Button type="link" onClick={() => handleClear && handleClear()}>
        清空面板
      </Button>
      <Button type="link" onClick={() => handleReset && handleReset()}>
        重 置
      </Button>
      <div style={{ width: 2, height: 20, backgroundColor: "#dedede" }}></div>
      <Button type="link" onClick={() => handleSave && handleSave()}>
        保存成模板
      </Button>
      <Button type="link" onClick={() => handleSave && handleSave()}>
        保存成业务组件
      </Button>
    </div>
  );
};

Toolbar.displayName = "Toolbar";

export default Toolbar;
