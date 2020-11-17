import React from "react";
import Toolbar from "./Toolbar";
import Stage from "./Stage";

const Layout: React.FC = () => {
  return (
    <div className="layout-editor">
      <Toolbar />
      <Stage />
    </div>
  );
};

Layout.displayName = "Layout";

export default Layout;
