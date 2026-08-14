import { type ToolId } from "./mapTools";

// This file contains only a type definition that all map configs should follow
export type MapConfig = {
  title: string;
  mapId: string;
  mapSwitchButton: MapSwitchButton;
  printTemplate: PrintTemplate;
  leftTools: ToolId[];
  rightTools: ToolId[];
};

export type MapSwitchButton = {
  navToLink: string;
  navImgSrc: string;
  navImgAlt: string;
  navLabel: string;
};

export type PrintTemplate = {
  logoImg: string;
  logoAlt: string;
};
