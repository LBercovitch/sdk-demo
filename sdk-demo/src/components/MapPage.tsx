import { Link } from "react-router";
import Header from '../components/Header.tsx'
import Map from '../components/Map.tsx'

type mapSwitchButton = {
  navToLink: string;
  navImgSrc: string;
  navImgAlt: string;
  navLabel: string;
};

type MapPageProps = {
  headerText: string;
  mapId: string;
  mapSwitchButton: mapSwitchButton;
};

function MapPage({headerText, mapId, mapSwitchButton}: MapPageProps) {
  var navButton = (
    <div className="w-30 p-5">
      <Link to={mapSwitchButton.navToLink}>
        <div className="flex flex-col flex-shrink items-center text-center w-35">
          <img src={mapSwitchButton.navImgSrc} alt={mapSwitchButton.navImgAlt} className="w-20" />
          <p className="text-neutral-50">
            {mapSwitchButton.navLabel}
          </p>
        </div>
      </Link>
    </div>
  );

  return (
    <>
      <Header h1Text={headerText} navButton={navButton} />
      <Map mapId={mapId} />
    </>
  )
}

export default MapPage
