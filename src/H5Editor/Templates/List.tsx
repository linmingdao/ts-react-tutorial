import React from "react";

const List: React.FC = (props) => {
  const { children } = props;
  return <div className="list">{children}</div>;
};

List.displayName = "List";

export default List;
