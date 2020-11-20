import { nanoid } from "nanoid";
import {
  BrickTemplate,
  BuildingTemplateGroup,
  BuildingTemplateGroupList,
  UniformTmplGroupList,
} from "./types";

export function getUniformTmplGroupList(
  brickTemplate: BrickTemplate,
  buildingTemplateGroupList: BuildingTemplateGroupList
): UniformTmplGroupList {
  return [
    {
      icon: brickTemplate.icon,
      group: "Bricks",
      title: "基础组件",
      components:
        (brickTemplate.getComponents &&
          brickTemplate.getComponents().map((item) => ({
            ...item,
            id: nanoid(),
            type: "Bricks",
          }))) ||
        [],
    },
    ...buildingTemplateGroupList.map((item: BuildingTemplateGroup) => ({
      icon: item.icon,
      group: item.group,
      title: item.title,
      components:
        (item.getComponents &&
          item.getComponents().map((item) => ({
            ...item,
            id: nanoid(),
            type: "",
          }))) ||
        [],
    })),
  ];
}
