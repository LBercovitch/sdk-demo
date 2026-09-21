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

  // Use the size of the scaled pixel to determine the size of each element in the
  // layout container
  // Note: this calculation assumes a standard web layout density of 96dpi
  const cqwPixel = (1 / (width * 96)) * 100;

  const cqwStyle = {
    '--px': `${cqwPixel}cqw`,
    aspectRatio: `${width} / ${height}`,
  }

  return (
    // For the components on the preview page, we can use Container Query Width (cqw) units
    // for sizing to allow the sizes of elements to scale with the size of the container.
    // This ensures that the page preview looks the same for any screen size
    // NOTE: cqw units are not a fixed size like px or rem, but are instead based on a percentage
    // of the container's width. So 1cqw = 1% of the container width. We can pair this with
    // the aspectRatio css attribute to ensure the preview maintains the correct size for the
    // indicated page size. In tailwind, a container query is defined using "@container"

    // TODO: Fix preview size bug
    <div
      style={cqwStyle}
      className={`@container bg-white shadow-xl
        ${printOptions.orientation === "landscape" ? "w-full mx-auto h-auto" : "h-full my-auto w-auto"}
      `}
    >
      <div
        className={`flex p-[calc(var(--px)*30)] text-[calc(var(--px)*10)] h-full
          ${printOptions.orientation === "landscape" ? "" : "flex-col"}
        `}
      >
        {/* MAP */}
        <div className="bg-slate-300 flex flex-1 items-center justify-center border-[calc(var(--px)*2)]">
          <PrintMap />
        </div>

        {/* Side Pannel */}
        <div className={`text-center flex ${
          printOptions.orientation === "landscape" ? "flex-col w-[25cqw] border-r-[calc(var(--px)*2)] border-y-[calc(var(--px)*2)]" :
            "h-[25cqw] border-b-[calc(var(--px)*2)] border-x-[calc(var(--px)*2)]"
        }`}>
          {/* Get the default logo if no file is uploaded */}
          {(printOptions.logo && printOptions.logoSource === undefined) &&
            <img src={printOptions.logoImg} alt={printOptions.logoAlt} className="h-[calc(var(--px)*150)] object-contain border-b-[calc(var(--px)*2)]" />
          }

          {/* If the logo is from a file */}
          {(printOptions.logo && printOptions.logoSource !== undefined) &&
            <img src={printOptions.logoSource} className="h-[calc(var(--px)*150)] object-contain border-b-[calc(var(--px)*2)]" />
          }

          <h2 className="text-[calc(var(--px)*20)] p-[calc(var(--px)*5)]">
            {printOptions.title}
          </h2>

          {printOptions.legend &&
            <div className="flex-1 bg-slate-200">
              {printOptions.legend}
            </div>
          }

          {printOptions.scaleBar && <div className="p-[calc(var(--px)*5)]">{printOptions.scaleBar}</div>}

          {printOptions.northArrow && <div>{printOptions.northArrow}</div>}

          {printOptions.scale && <div className="text-[calc(var(--px)*16)]">{"Scale: 1:" + printOptions.scale}</div>}

          {printOptions.attribution && <div className="text-[calc(var(--px)*10)] p-[calc(var(--px)*5)]">{printOptions.attributionText}</div>}
        </div>
      </div>
    </div>
  );
}

export default PrintPreview;
