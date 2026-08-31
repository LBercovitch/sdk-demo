import {type MapConfig } from "./mapConfig";

export const earthConfig: MapConfig = {
  title: "Earth",
  mapId: "33b628294cb04e22b6a324c943817b74",
  mapSwitchButton: {
    navToLink: "/moon",
    navImgSrc: "/Moon.png",
    navImgAlt: "The Moon",
    navLabel: "Off to the Moon!"
  },
  printTemplate: {
    pageLayout: {
      size: "legal",
      orientation: "landscape",
      margin: 15, // pixels
      title: "The Home World",
      center: [49.26, -123.11], 
      scale: 250000, // i.e. 1:25000
      rotation: 0, // north at the top
      legend: true,
      scaleBar: true,
      northArrow: true,
      logoImg: "/Earth.png",
      logoAlt: "Earth",
      logo: true,
      logoSource: undefined, // if undefined and logo is ture, use the default logoImg
      attribution: true,
      attributionText: "Leah Bercovitch, 2026",
    }
  },
  leftTools: [
    "layerList",
    "layerTable",
    "baseMapList",
    "measureDistance",
  ],
  rightTools: [
    "editor",
    "print"
  ]
} as const;