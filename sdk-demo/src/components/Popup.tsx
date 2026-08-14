type PopupProps = {
  closeFunction: () => void;
  toolComponent: React.ReactNode;
};

function Popup({closeFunction, toolComponent}: PopupProps) {
  return (
    // Add a mask on the background content
    <div className="fixed top-0 left-0 z-10 bg-slate-950/80 w-full h-full">
      {/* The popup frame */}
      <div className="fixed z-20 top-0 left-0 bg-slate-100 rounded-md
        m-2 md:m-20 w-[calc(100%-16px)] md:w-[calc(100%-160px)] h-[calc(100%-16px)] md:h-[calc(100%-160px)]"
      >
        {/* Create a close button that when clicked, resets the active popupTool to null */}
        <button
          className="absolute z-10 right-0 w-fit rounded-full border-1 border-slate-950 px-2.5 py-1 mt-3 mx-3
            cursor-pointer self-end hover:bg-slate-900 hover:text-slate-100 hover:border-slate-100 font-bold"
          onClick={closeFunction}
        >
          ✕
        </button>
        {/* Add a tool component to the popup */}
        {toolComponent}
      </div>
    </div>
  );
};

export default Popup;