import { useEffect } from 'react';

import { usePrint } from "./PrintProvider";
import { pageSizes } from "../../config/pageLayout";
import PrintMap from "./PrintMap";

function PrintPreview() {
  const { printOptions } = usePrint();
  const pageSize = pageSizes[printOptions.size];

  // Note the pageSizes from the pageLayout config assumes landscape orientation
  // is the default orientation 
  const width = printOptions.orientation === "landscape" ?
    pageSize.width :
    pageSize.height;

  const height = printOptions.orientation === "landscape" ?
    pageSize.height :
    pageSize.width;

  return (
    <div
      className={`bg-white shadow-xl flex p-5 h-full ${printOptions.orientation === "landscape" ? "" : "flex-col"}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {/* MAP */}
      <div className="bg-slate-300 flex flex-1 items-center justify-center border-1">
        <PrintMap />
      </div>

      {/* Side Pannel */}
      <div className={`text-center flex ${
        printOptions.orientation === "landscape" ? "flex-col w-1/4 border-r-1 border-y-1" : "h-1/4  border-b-1 border-x-1"
      }`}>
        {/* Get the default logo if no file is uploaded */}
        {(printOptions.logo && printOptions.logoSource === undefined) &&
          <img src={printOptions.logoImg} alt={printOptions.logoAlt} className="h-25 object-contain border-b-1" />
        }

        {/* If the logo is from a file */}
        {(printOptions.logo && printOptions.logoSource !== undefined) &&
          <img src={printOptions.logoSource} className="h-25 object-contain border-b-1" />
        }

        <h2 className="text-xl">
          {printOptions.title}
        </h2>

        {printOptions.legend &&
          <div className="flex-1 bg-slate-200">
            {printOptions.legend}
          </div>
        }

        {printOptions.scaleBar && <div>{printOptions.scaleBar}</div>}

        {printOptions.northArrow && <div>{printOptions.northArrow}</div>}

        {printOptions.scale && <div>{"Scale: 1:" + printOptions.scale}</div>}

        {printOptions.attribution && <div className="text-sm">{printOptions.attributionText}</div>}
      </div>
    </div>
  );
}

export default PrintPreview;
