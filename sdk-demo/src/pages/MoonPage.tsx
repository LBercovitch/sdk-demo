import { Link } from "react-router";
import Map from '../components/Map.tsx'

function MoonPage() {
  var mapId = "d7e6f5eaec4a4d259269c65c6d5435bf";
  return (
    <>
      <div className="w-30 p-5">
        <Link to="/earth">
          <div className="flex flex-col flex-shrink items-center text-center w-30">
            <img src="/Earth.png" alt="Earth" className="w-20" />
            <p className="text-neutral-50">
              Return to Earth
            </p>
          </div>
        </Link>
      </div>
      <Map mapId={mapId} />
    </>
  )
}

export default MoonPage
