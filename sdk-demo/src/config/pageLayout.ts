// We can use some typescript definitions here to define the elements of a print layout
export type pageLayout = {
  // page options
  size: "letter" | "legal" | "tabloid" | "A1" | "A2" | "A3" | "A4";
  orientation: "portrait" | "landscape";
  margin: number;

  // Map optiony
  title: string;
  center: [number, number];
  scale: number;
  rotation: number;

  // layout options
  legend: boolean;
  scaleBar: boolean;
  northArrow: boolean;

  logoImg: string;
  logoAlt: string;
  logo: boolean; // i.e. show the logo on the layout
  logoSource: string | File | undefined; // a custom file chosen by the use, overrides the logoImg

  attribution: boolean;
  attributionText: string | undefined;
}

export const pageSizes = { // in inches, landscape
  letter: {
    width: 11,
    height: 8.5,
  },

  legal: {
    width: 14,
    height: 8.5,
  },

  tabloid: {
    width: 17,
    height: 11,
  },

  A1: {
    width: 33.1,
    height: 23.4,
  },

  A2: {
    width: 23.4,
    height: 16.5,
  },

  A3: {
    width: 16.5,
    height: 11.7,
  },

  A4: {
    width: 11.7,
    height: 8.3,
  },
} as const;