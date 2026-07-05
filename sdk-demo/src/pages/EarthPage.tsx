import MapPage from '../components/MapPage.tsx'

function EarthPage() {
  var headerText = "Earth";
  var mapId = "33b628294cb04e22b6a324c943817b74";
  var mapSwitchButton = {
    navToLink: "/moon",
    navImgSrc: "/Moon.png",
    navImgAlt: "The Moon",
    navLabel: "Off to the Moon!"
  }

  return (
    <>
      <MapPage headerText={headerText} mapId={mapId} mapSwitchButton={mapSwitchButton}/>
    </>
  )
}

export default EarthPage