import { useState } from 'react';

// arcgis components
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-editor";

type MapProps = {
  mapId: string;
};

function Map({ mapId }: MapProps) {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setShowEditor(!showEditor)}
        className="px-3 py-4 cursor-pointer bg-neutral-50"
      >
        {showEditor ? 'Hide Editor' : 'Show Editor'}
      </button>

      <arcgis-map item-id={mapId}>
        <arcgis-zoom slot="top-left" />
        {showEditor && <arcgis-editor slot="top-right" />}
      </arcgis-map>
    </>
  )
}

export default Map