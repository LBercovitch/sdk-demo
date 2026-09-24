import { usePrint } from "./PrintProvider";

import "@arcgis/map-components/components/arcgis-map";

function PrintMap() {
  const { printOptions, updatePrintOption } = usePrint();
  const scale = printOptions.scale;
  const rotation = printOptions.rotation;
  const latitude = printOptions.center?.latitude ?? 0;
  const longitude = printOptions.center?.longitude  ?? 0;
  const center = [longitude, latitude];
  console.log(center);
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
