import PrinterIcon from "../../icons/PrinterIcon";
import PrintSettings from "./PrintSettings";
import PrintPreview from "./PrintPreview";

function Print() {
  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="shrink-0 font-bold text-3xl text-center py-6">
        Print Preview
      </h1>
      <div className="flex h-[calc(100%-66px)] bg-slate-200 rounded-b-md">
        <div className="flex-1 flex items-center justify-center p-6">
          <PrintPreview />
        </div>
        <div className="w-80 flex flex-col bg-slate-500 text-slate-200 rounded-br-md">
          {/* Header */}
          <h2 className="shrink-0 py-4 text-center text-2xl">Print Settings</h2>

          {/* Scrollable Form */}
          <div className="flex flex-col overflow-y-auto flex-1 shrink-0 p-6 bg-slate-400 text-slate-950">
            <PrintSettings />
          </div>

          {/* Print Button */}
          <div className="shrink-0 flex justify-center pt-4 pb-6">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap
              cursor-pointer bg-slate-300 text-slate-950 hover:bg-slate-900 hover:text-slate-200"
            >
              <PrinterIcon iconHeight={"18"} iconWidth={"18"}/>
              Print Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Print;
