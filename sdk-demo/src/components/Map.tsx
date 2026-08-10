import { useEffect, useState } from "react";
import ToolBar from "./ToolBar";

import {
  mapTools,
  type ToolId,
} from "../config/mapTools";

import { type MapConfig } from "../config/mapConfig";

// ArcGIS components
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-editor";
import "@arcgis/map-components/components/arcgis-basemap-gallery";
import "@arcgis/map-components/components/arcgis-distance-measurement-2d";
import "@arcgis/map-components/components/arcgis-feature-table";

type MapProps = {
  mapConfig: MapConfig;
};

// The tool components are defined as functions instead of just
// components because the slot position needs to be defined
// after the map config is loaded, so that the tool can
// go either on the left or the right, depending on the config
const toolComponents = {
  "layer-list": (slot: "top-left" | "top-right") => (
    <arcgis-layer-list selection-mode="single" slot={slot} />
  ),
  "feature-table": () => (<div className="h-full md:h-1/2">
      <arcgis-feature-table className="h-full" reference-element="demo-map" sync-view-selection />
    </div>),
  "basemap-gallery": (slot: "top-left" | "top-right") => (
    <arcgis-basemap-gallery slot={slot} />
  ),
  "distance-measurement": (slot: "top-left" | "top-right") => (
    <arcgis-distance-measurement-2d slot={slot} />
  ),
  "editor": (slot: "top-left" | "top-right") => (
    <arcgis-editor slot={slot} />
  ),
};

function Map({ mapConfig }: MapProps) {
  const [leftTool, setLeftTool] = useState<ToolId | null>(null);
  const [rightTool, setRightTool] = useState<ToolId | null>(null);
  const [tableVisible, setTableVisible] = useState<boolean>(false);

  // When the map id changes, i.e. a new map is loaded, we need to reset all of the tools
  useEffect(() => {
    setLeftTool(null);
    setRightTool(null);
    setTableVisible(false);
  }, [mapConfig.mapId]);

  // This will toggle the display of the tool, so if a tool button is pressed,
  // It will either open the tool, or close it if it is the one that is currently active
  const toggleTool = (
    tool: ToolId,
    setTool: React.Dispatch<React.SetStateAction<ToolId | null>>
  ) => {
    setTool((activeTool)  => (activeTool === tool ? null : tool));
  };

  // The table will be alowed to be open when another tool is active,
  // so it gets its own toggle 
  const toggleTable = () => {
    setTableVisible(!tableVisible);
  };

  // For each tool in the config's left toolbar, get the id, icon, label, and onClick function
  const leftButtons = mapConfig.leftTools.map((toolId) => {
    const tool = mapTools[toolId];
    const componentName = tool.component;

    const click = componentName === "feature-table" ?
      (() => toggleTable()) :
      (() => toggleTool(tool.id, setLeftTool));

    return {
      id: tool.id,
      icon: ( <tool.icon iconHeight="40px" iconWidth="40px" /> ),
      label: tool.label,
      onClick: click,
    };
  });

  // For each tool in the config's right toolbar, get the id, icon, label, and onClick function
  const rightButtons = mapConfig.rightTools.map((toolId) => {
    const tool = mapTools[toolId];
    const componentName = tool.component;

    const click = componentName === "feature-table" ?
      (() => toggleTable()) :
      (() => toggleTool(tool.id, setLeftTool));

    return {
      id: tool.id,
      icon: ( <tool.icon iconHeight="40px" iconWidth="40px" /> ),
      label: tool.label,
      onClick: click,
    };
  });

  // Conditionally define the active tools and table
  const activeLeftComponent = leftTool && mapTools[leftTool] ?
    toolComponents[mapTools[leftTool].component]("top-left") :
    null;

  const activeRightComponent = rightTool && mapTools[rightTool] ?
    toolComponents[mapTools[rightTool].component]("top-right") :
    null;

  const activeTable = tableVisible ?
    toolComponents[mapTools.layerTable.component]():
    null;

  return (
    // Set the tool bar widths to 120px and have the center stretch to fill the remaining space
    <div className="grid grid-cols-[120px_1fr_120px]">
      {/* Left toolbar */}
      <ToolBar
        buttons={leftButtons}
        direction="vertical"
        active={leftTool}
      />

      {/* Map */}
      {/*
        We need to add a key to the map section so when the map config changes,
        react is forced to unmount the old map component and replaces it with a new one. This
        ensures that the default map settings, like initial zoom level, the map's center,
        and others are applied to the new map. The same thing goes for the table.
      */}
      {/* The 96px and 180px are the height of the header, sorry to hard code it :( */}
      <div key={mapConfig.mapId} className="flex flex-col h-[calc(100vh-96px)] md:h-[calc(100vh-180px)]">
        <arcgis-map
          id="demo-map"
          item-id={mapConfig.mapId}
          className={`flex-1 w-full bg-neutral-50 ${tableVisible ? "hidden md:block": ""}`}
        >
          {/* Add the tools that will always be on the map */}
          <arcgis-zoom slot="bottom-left" />

          {/* Left-side active tool */}
          {activeLeftComponent}

          {/* Right-side active tool */}
          {activeRightComponent}
        </arcgis-map>

        {/* Add the table when it is active */}
        {activeTable}
      </div>

      {/* Right toolbar */}
      <ToolBar
        buttons={rightButtons}
        direction="vertical"
        active={rightTool}
      />

    </div>
  );
}

export default Map
