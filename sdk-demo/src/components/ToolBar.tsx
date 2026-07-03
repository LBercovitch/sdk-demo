// Typescript defs
export type ToolBarButton = {
  id: string; // Used for the manditory key attribute needed for iterative component construction 
  icon: React.ReactNode; // All icons are svgs wrapped in a react component, located in the icons folder
  label: string;
  onClick: () => void;
};

type ToolBarProps = {
  buttons: ToolBarButton[];
};

export function ToolBar({ buttons }: ToolBarProps) {
  return (
    <div className="toolbar">
      {buttons.map(button => (
        <button key={button.id} onClick={button.onClick}>
          {button.icon}
          {button.label}
        </button>
      ))}
    </div>
  );
}
