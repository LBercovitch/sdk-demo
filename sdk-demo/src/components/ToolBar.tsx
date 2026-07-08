// Typescript defs
export type ToolBarButton = {
  id: string; // Used for the manditory "key" attribute needed for iterative component construction
  icon: React.ReactNode; // All icons are svgs wrapped in a react component, located in the icons folder
  label: string;
  onClick: () => void;
};

type ToolBarProps = {
  buttons: ToolBarButton[];
  direction: "vertical" | "horizontal";
  active: string | null;
};

function ToolBar({ buttons, direction, active }: ToolBarProps) {
  return (
    <div className={`bg-blue-200 p-4 ${direction === "vertical" ? "flex flex-col gap-4" : ""}`}>
      {buttons.map(button => (
        <button
          key={button.id}
          onClick={button.onClick}
          className={`flex flex-col items-center text-center justify-center
            text-xs px-2 py-2 rounded-xl border-1 border-blue-200 cursor-pointer
            hover:bg-slate-900 hover:text-blue-200
            ${active === button.id ? "bg-slate-900 text-blue-200" : "text-blue-950 bg-blue-300"}`}
        >
          {button.icon}
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default ToolBar
