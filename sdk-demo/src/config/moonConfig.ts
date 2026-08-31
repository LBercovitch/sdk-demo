import {type MapConfig } from "./mapConfig";

export const moonConfig: MapConfig = {
  title: "The Moon",
  mapId: "d7e6f5eaec4a4d259269c65c6d5435bf",
  mapSwitchButton: {
    navToLink: "/earth",
    navImgSrc: "/Earth.png",
    navImgAlt: "Earth",
    navLabel: "Return to Earth",
  },
  printTemplate: {
    pageLayout: {
      size: "tabloid",
      orientation: "portrait",
      margin: 15, // pixels
      title: "Moon in Mercator",
      center: [0, 0], 
      scale: 25000, // i.e. 1:20000
      rotation: 0, // north at the top
      legend: true,
      scaleBar: true,
      northArrow: true,
      logoImg: "/Moon.png",
      logoAlt: "The Moon",
      logo: true,
      logoSource: undefined, // if undefined and logo is ture, use the default logoImg
      attribution: true,
      attributionText: "Wagner, R. V., Nelson, D. M., Plescia, J. B., Robinson, M. S., Speyerer, E. J., and Mazarico, E. (2017). Coordinates of anthropogenic features on the Moon. Icarus, 283, 92-103. https://doi.org/10.1016/j.icarus.2016.05.011",
    }
  },
  leftTools: [
    "layerList",
    "measureDistance",
  ],
  rightTools: [
    "editor",
    "layerTable",
    "print",
  ]
} as const;