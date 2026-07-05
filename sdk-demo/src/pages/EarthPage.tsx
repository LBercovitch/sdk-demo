import { Link } from "react-router";
import Map from '../components/Map.tsx'

function EarthPage() {
  return (
    <>
      <div className="w-30 p-5">
        <Link to="/moon">
          <div className="flex flex-col flex-shrink items-center text-center w-30">
            <img src="/Moon.png" alt="Moon" className="w-20" />
            <p className="text-neutral-50">
              To the Moon!
            </p>
          </div>
        </Link>
      </div>
      <Map mapId="33b628294cb04e22b6a324c943817b74"/>
    </>
  )
}

export default EarthPage