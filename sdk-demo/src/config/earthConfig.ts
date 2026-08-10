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
  leftTools: [
    "layerList",
    "layerTable",
    "baseMapList",
    "measureDistance",
  ],
  rightTools: [
    "editor",
  ]
} as const;