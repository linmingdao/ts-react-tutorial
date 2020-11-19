import React, { useMemo, memo, FC, useContext } from "react";
import Loadable from "react-loadable";
import { EditorContext } from "./index";

const DynamicFunc = (
  loader: any,
  componentType: string,
  componentName: string
) => {
  console.log(componentName);
  return Loadable({
    loader: loader(componentName),
    loading() {
      return <div>Loading...</div>;
    },
  });
};

type DynamicType = {
  componentType: string;
  componentName: string;
};

const DynamicEngine = memo((props: DynamicType) => {
  const { loader } = useContext(EditorContext);
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
