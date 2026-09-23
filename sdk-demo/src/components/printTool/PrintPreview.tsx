import { useState, useRef, useEffect } from "react";
import { usePrint } from "./PrintProvider";
import { pageSizes } from "../../config/pageLayout";
import PrintMap from "./PrintMap";

function PrintPreview() {
  const { printOptions } = usePrint();

  const containerRef = useRef<HTMLDivElement>(null);
  // Keep track of the container size to know if the preview container is
  // in landscape or portrait to know if the length or width is the limiting
  // factor to determine the size of the page div
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0
  });

  const pageSize = pageSizes[printOptions.size];

  // Note the pageSizes from the pageLayout config assumes landscape orientation
  // is the default orientation 
  const width = printOptions.orientation === "landscape" ?
    pageSize.width :
    pageSize.height;

  const height = printOptions.orientation === "landscape" ?
    pageSize.height :
    pageSize.width;

  // Since the page width and height are in inches, we can multiply by 96 to get the
  // size in pixels instead
  const pageWidth = width * 96;
  const pageHeight = height * 96;

  // Use a resize observer to keep track of the page container dimensions.
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;

      setContainerSize({
        width,
        height
      });
    });

    observer.observe(containerRef.current);
    console.log(printOptions);

    return () => observer.disconnect();
  }, []);

  // The container size can then be used to determine which dimention
  // limits the size of the page
  const scale = Math.min(
    containerSize.width / pageWidth,
    containerSize.height / pageHeight
  );

  // Use the size of the scaled pixel to determine the size of each element in the
  // layout container
  // Note: this calculation assumes a standard web layout density of 96dpi
  const scalingCoeficient = (1 / pageWidth) * 100;
  const cqwStyle = {'--px': `${scalingCoeficient}cqw`}

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    >
      {/*
        For the components on the preview page, we can use Container Query Width (cqw) units
        for sizing to allow the sizes of elements to scale with the size of the container.
        This ensures that the page preview looks the same for any screen size
        NOTE: cqw units are not a fixed size like px or rem, but are instead based on a percentage
        of the container's width. So 1cqw = 1% of the container width. We can pair this with
        the aspectRatio css attribute to ensure the preview maintains the correct size for the
        indicated page size. In tailwind, a container query is defined using "@container"
      */}
      <div
        className="@container bg-white shadow-xl"
        style={{
          ...cqwStyle,
          width: `${pageWidth * scale}px`,
          aspectRatio: `${pageWidth} / ${pageHeight}`,
        }}
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
    </div>
  );
}

export default PrintPreview;
