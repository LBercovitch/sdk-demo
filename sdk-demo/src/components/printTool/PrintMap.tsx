import { usePrint } from "./PrintProvider";

import "@arcgis/map-components/components/arcgis-map";

function PrintMap() {
  const { printOptions, updatePrintOption } = usePrint();
  const scale = printOptions.scale;
  const center = printOptions.center;
  const rotation = printOptions.rotation;
  return (
    <>
      <arcgis-map
        item-id={printOptions.mapId}
        center={center}
        scale={scale}
        rotation={rotation}
      />
    </>
  );
}

export default PrintMap;
