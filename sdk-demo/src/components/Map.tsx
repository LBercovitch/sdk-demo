import { useState } from 'react';
import LayerListIcon from "../icons/LayerListIcon"
import EditIcon from "../icons/EditIcon"
import  BMListIcon from "../icons/BMListIcon"
import ToolBar from './ToolBar';

// arcgis components
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-editor";
import "@arcgis/map-components/components/arcgis-basemap-gallery";

type MapProps = {
  mapId: string;
};

function Map({ mapId }: MapProps) {
  const [leftTool, setLeftTool] = useState<string | null>(null);
  const [rightTool, setRightTool] = useState<string | null>(null);

  const toggleTool = (
    tool: string,
    setTool: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setTool(activeTool  => (activeTool === tool ? null : tool));
  };

  const leftButtons = [
    {
      id: "layerList",
      icon: <LayerListIcon iconWidth="40px" iconHeight="40px" />,
      label: "Layers",
      onClick: () => toggleTool("layerList", setLeftTool),
    },
    {
      id: "baseMapList",
      icon: <BMListIcon iconWidth="40px" iconHeight="40px" />,
      label: "Base Maps",
      onClick: () => toggleTool("baseMapList", setLeftTool),
    },
  ];

  const rightButtons = [
    {
      id: "editor",
      icon: <EditIcon iconWidth="40px" iconHeight="40px" />,
      label: "Edit",
      onClick: () => toggleTool("editor", setRightTool),
    },
  ];

  return (
    <div className="grid grid-cols-[120px_1fr_120px]">
      <ToolBar buttons={leftButtons} direction="vertical" active={leftTool} />
      <arcgis-map item-id={mapId}>
        <arcgis-zoom slot="bottom-left" />
        {leftTool === "layerList" && <arcgis-layer-list slot="top-left" />}
        {leftTool === "baseMapList" && <arcgis-basemap-gallery slot="top-left" />}
        {rightTool === "editor" && <arcgis-editor slot="top-right" />}
      </arcgis-map>
      <ToolBar buttons={rightButtons} direction="vertical" active={rightTool} />
    </div>
  )
}

export default Map
