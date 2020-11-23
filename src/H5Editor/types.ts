export interface BrickComponent {
  label: string;
  name: string;
}

export interface BrickTemplate {
  icon?: any;
  loader: (name: string) => any;
  getComponents?: () => BrickComponent[];
}

export interface BuildingTemplateGroup {
  icon?: any;
  group: string;
  title: string;
  getComponents?: () => any[];
  updateComponents?: () => void;
}

export type BuildingTemplateGroupList = BuildingTemplateGroup[];

// 统一的模板组件分组
export interface UniformTmplGroup {
  icon?: any;
  group: string;
  title: string;
  components: any[];
}

// 统一的模板组件分组列表
export type UniformTmplGroupList = UniformTmplGroup[];

export interface H5EditorProps {
  brickTemplate: BrickTemplate;
  buildingTemplateGroupList: BuildingTemplateGroupList;
  className?: string;
  style?: React.CSSProperties;
}

export type SelectedCallback = (selectedIndex: number) => void;

export type NoSelectedCallback = () => void;

export interface H5EditorContext {
  brickTemplate: BrickTemplate;
  buildingTemplateGroupList: BuildingTemplateGroupList;
  stageItemList: StageItem[];
  currentIndex: number;
  currentProps: any;
  handlePropsChange?: (
    changedValues: any,
    allValues: any,
    selectedIndex: number
  ) => void;
  handleDrop?: (item: any) => void;
  handleCopy?: SelectedCallback;
  handleRemove?: SelectedCallback;
  handleSelect?: SelectedCallback;
  handleClear?: NoSelectedCallback;
  handleReset?: NoSelectedCallback;
  handleUndo?: NoSelectedCallback;
  handleRedo?: NoSelectedCallback;
  handleSave?: NoSelectedCallback;
}

export interface StageItem {
  id: string;
  name: string;
  props: any;
}

export interface BrickSchema {
  onAttributesChange: (attrs: any) => void;
}
