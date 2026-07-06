import MapPage from '../components/MapPage.tsx'

function MoonPage() {
  var headerText = "The Moon";
  var mapId = "d7e6f5eaec4a4d259269c65c6d5435bf";
  var mapSwitchButton = {
    navToLink: "/earth",
    navImgSrc: "/Earth.png",
    navImgAlt: "Earth",
    navLabel: "Return to Earth"
  }

  return (
    <MapPage headerText={headerText} mapId={mapId} mapSwitchButton={mapSwitchButton}/>
  )
}

export default MoonPage
