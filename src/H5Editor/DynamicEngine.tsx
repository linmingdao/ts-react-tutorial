import React, { useMemo, memo, FC, useContext } from "react";
import Loadable from "react-loadable";
import { EditorContext } from "./index";

const DynamicFunc = (
  loader: any,
  componentType: string,
  componentName: string
) => {
  if (componentType === "Bricks") {
    return Loadable({
      loader: loader(componentName),
      loading() {
        return <div>Loading...</div>;
      },
    });
  } else {
    return <div>未处理</div>;
  }
};

type DynamicType = {
  componentType: string;
  componentName: string;
  mode: string;
  onValuesChange: (changedValues: any, allValues: any) => void;
};

const DynamicEngine = memo((props: DynamicType) => {
  const { brickTemplate } = useContext(EditorContext);
  const { loader } = brickTemplate;
  const { componentType, componentName } = props;
  const Dynamic = useMemo(() => {
    return (DynamicFunc(loader, componentType, componentName) as unknown) as FC<
      DynamicType
    >;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Dynamic {...props} />;
});

DynamicEngine.displayName = "DynamicEngine";

export default DynamicEngine;
