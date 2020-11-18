import React, { useMemo, memo, FC } from "react";
import Loadable from "react-loadable";

const DynamicFunc = (componentType: string, componentName: string) => {
  return Loadable({
    loader: () => import(`../Components/${componentType}/${componentName}`),
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
  const { componentType, componentName } = props;
  const Dynamic = useMemo(() => {
    return (DynamicFunc(componentType, componentName) as unknown) as FC<
      DynamicType
    >;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Dynamic {...props} />;
});

DynamicEngine.displayName = "DynamicEngine";

export default DynamicEngine;
