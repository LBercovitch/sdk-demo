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
    logoImg: "/Moon.png",
    logoAlt: "The Moon",
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