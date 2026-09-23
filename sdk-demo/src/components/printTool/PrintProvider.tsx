// This component is a provider to keep track of the print component states
// so that they can easily be carried over from the form, to the preview,
// and the pdf builder without requiring prop drilling

import { createContext, useContext, useState, type ReactNode } from "react";
import type { pageLayout } from "../../config/pageLayout";
import type { PrintTemplate } from "../../config/mapConfig";
import type Point from "@arcgis/core/geometry/Point";

type PrintContextType = {
  printOptions: pageLayout;
  updatePrintOption: <K extends keyof pageLayout>(
    key: K,
    value: pageLayout[K]
  ) => void;
};

const PrintContext = createContext<PrintContextType | null>(null);

type PrintProviderProps = {
  defaults: PrintTemplate;
  initialCenter?: Point;
  initialRotation?: number;
  children: ReactNode;
};

export function PrintProvider({
  defaults,
  initialCenter,
  initialRotation,
  children,
}: PrintProviderProps) {
  const [printOptions, setPrintOptions] = useState<pageLayout>(() => ({
    ...defaults.pageLayout,
    center: initialCenter
      ? [initialCenter.x, initialCenter.y]
      : defaults.pageLayout.center,
    rotation: initialRotation ?? defaults.pageLayout.rotation,
  }));

  const updatePrintOption = <K extends keyof pageLayout>(
    key: K,
    value: pageLayout[K]
  ) => {
    setPrintOptions(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <PrintContext.Provider
      value={{
        printOptions,
        updatePrintOption,
      }}
    >
      {children}
    </PrintContext.Provider>
  );
}

export function usePrint() {
  const context = useContext(PrintContext);

  if (!context) {
    throw new Error("usePrint must be used within a PrintProvider");
  }

  return context;
}
