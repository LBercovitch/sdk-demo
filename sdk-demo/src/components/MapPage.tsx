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
    <Link to={mapSwitchButton.navToLink}>
      <div className="group flex flex-col justify-center items-center text-center
        w-20 md:w-37 h-20 md:h-35 border-2 border-slate-700 rounded-3xl
        hover:border-indigo-200 hover:bg-blue-950"
      >
        <img
          src={mapSwitchButton.navImgSrc}
          alt={mapSwitchButton.navImgAlt}
          className="w-10 md:w-20 group-hover:scale-110 transition-transform"
        />
        <p className="text-[10px] md:text-base text-slate-500 group-hover:text-neutral-50">
          {mapSwitchButton.navLabel}
        </p>
      </div>
    </Link>
  );

  return (
    <>
      <Header h1Text={headerText} navButton={navButton} />
      <Map mapId={mapId} />
    </>
  )
}

export default MapPage
