import type { ComponentType } from "react";

import LayerListIcon from "../icons/LayerListIcon";
import EditIcon from "../icons/EditIcon";
import  BMListIcon from "../icons/BMListIcon";
import RulerIcon from "../icons/RulerIcon";
import TableIcon from "../icons/TableIcon";
import PrinterIcon from "../icons/PrinterIcon";

export type ToolId = keyof typeof mapTools;

type ToolIcon = ComponentType<{
  iconHeight: string;
  iconWidth: string;
}>;

export const mapTools = {
  layerList: {
    id: "layerList",
    label: "Layers",
    icon: LayerListIcon as ToolIcon,
    component: "layer-list",
    position: "slot",
  },

  layerTable: {
    id: "layerTable",
    label: "Layer Table",
    icon: TableIcon as ToolIcon,
    component: "feature-table",
    position: "table",
  },

  baseMapList: {
    id: "baseMapList",
    label: "Base Maps",
    icon: BMListIcon as ToolIcon,
    component: "basemap-gallery",
    position: "slot",
  },

  measureDistance: {
    id: "measureDistance",
    label: "Measure",
    icon: RulerIcon as ToolIcon,
    component: "distance-measurement",
    position: "slot",
  },

  editor: {
    id: "editor",
    label: "Edit",
    icon: EditIcon as ToolIcon,
    component: "editor",
    position: "slot",
  },

  print: {
    id: "print",
    label: "Print",
    icon: PrinterIcon as ToolIcon,
    component: "print",
    position: "popup",
  },
} as const;