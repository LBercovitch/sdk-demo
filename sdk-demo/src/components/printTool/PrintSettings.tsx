import { usePrint } from "./PrintProvider";
import { pageSizes } from "../../config/pageLayout";

/*
 * This component defines the fields in the print settings form
 * and uses the PrintProvider to share component states with the
 * actual print page layout and the pdf builder 
 */

function PrintSettings() {
  const { printOptions, updatePrintOption } = usePrint();

  return (
    <>
      {/* Title */}
      <label htmlFor="title">Map Title:</label>
      <input
        id="title"
        name="title"
        value={printOptions.title}
        onChange={e =>
          updatePrintOption("title", e.target.value)
        }
        className="print-input"
      />

      {/* Page Size */}
      <label htmlFor="pageSize">Page Size:</label>
      <select
        id="pageSize"
        name="pageSize"
        value={printOptions.size}
        onChange={e =>
          updatePrintOption("size", e.target.value as keyof typeof pageSizes)
        }
        className="print-input"
      >
        {(Object.keys(pageSizes) as Array<keyof typeof pageSizes>).map(size => (
          <option key={size} value={size}>
            {size} ({pageSizes[size].height}" x {pageSizes[size].width}")
          </option>
        ))}
      </select>

      {/* Page Orientation */}
      <label htmlFor="orientation">Page Orientation:</label>
      <select
        id="orientation"
        name="orientation"
        value={printOptions.orientation}
        onChange={e =>
          updatePrintOption("orientation", e.target.value as "portrait" | "landscape")
        }
        className="print-input"
      >
        <option key="portait" value="portait">Portait</option>
        <option key="landscape" value="landscape">Landscape</option>
      </select>

      {/* Scale */}
      <label htmlFor="scale">Map Scale:</label>
      <input
        id="scale"
        type="number"
        step="10000"
        min="10000"
        max="500000000"
        value={printOptions.scale}
        onChange={e =>
          updatePrintOption("scale", Number(e.target.value))
        }
        className="print-input"
      />

      {/* legend */}
      <div className="flex w-full justify-between">
        <label htmlFor="legend">Legend Visible:</label>
        <input
          id="legend"
          name="legend"
          type="checkbox"
          checked={printOptions.legend}
          onChange={e =>
            updatePrintOption("legend", e.target.checked)
          }
          className="print-input"
        />
      </div>

      {/* Scale Bar */}
      <div className="flex w-full justify-between">
        <label htmlFor="scaleBar">Scale Bar Visible:</label>
        <input
          id="scaleBar"
          name="scaleBar"
          type="checkbox"
          checked={printOptions.scaleBar}
          onChange={e =>
            updatePrintOption("scaleBar", e.target.checked)
          }
          className="print-input" />
      </div>

      {/* North Arrow */}
      <div className="flex w-full justify-between">
        <label htmlFor="northArrow">North Arrow Visible:</label>
        <input
          id="northArrow"
          name="northArrow"
          type="checkbox"
          checked={printOptions.northArrow}
          onChange={e =>
            updatePrintOption("northArrow", e.target.checked)
          }
          className="print-input"
        />
      </div>

      {/* Logo */}
      <div className="flex w-full justify-between">
        <label htmlFor="logo">Logo Visible:</label>
        <input
          id="logo"
          name="logo"
          type="checkbox"
          checked={printOptions.logo}
          onChange={e =>
            updatePrintOption("logo", e.target.checked)
          }
          className="print-input"
        />
      </div>

      {/* Logo Source */}
      {printOptions.logo &&
        <>
          <label htmlFor="logoSource">Logo Source (Optional*):</label>
          <input
            id="logoSource"
            name="logoSource"
            type="file"
            // NOTE: the user can easily change the accept attribute, so it is good practice
            // to have additional checks to make sure a valid image file type is used
            // and not something malicious
            accept="image/*"
            onChange={e => {
              const file = e.target.files?.[0];
              // Create a temporary URL from the file so that it can be used in an image element
              const url = file ? URL.createObjectURL(file) : undefined;
              updatePrintOption("logoSource", url);
            }}
            className="print-input"
          />
          <p className="text-xs mb-6 mt-[-18px]">
            * If no file is selected, your organization's default logo will be used instead.
          </p>
        </>
      }
      
      {/* Attribution */}
      <div className="flex w-full justify-between">
        <label htmlFor="attribution">Attribution Visible:</label>
        <input
          id="attribution"
          name="attribution"
          type="checkbox"
          checked={printOptions.attribution}
          onChange={e =>
            updatePrintOption("attribution", e.target.checked)
          }
          className="print-input"
        />
      </div>

      {/* Attribution Text */}
      {printOptions.attribution &&
        <>
          <label htmlFor="attributionText">Attribution Text:</label>
          <textarea
            id="attributionText"
            name="attributionText"
            value={printOptions.attributionText}
            onChange={e =>
              updatePrintOption("attributionText", e.target.value)
            }
            className="print-input shrink-0 h-30"
          />
        </>
      }
    </>
  );
}

export default PrintSettings;
