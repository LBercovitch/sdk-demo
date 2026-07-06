import { Link } from "react-router";
import Header from '../components/Header.tsx'

function LandingPage() {
  return (
    <>
      <Header h1Text="Map SDK Demo" />
      <div className="flex flex-wrap justify-center items-center md:pt-20 pt-10 pb-20 font-barrio text-purple-50 md:text-5xl text-2xl">
        <h1 className="basis-full h-fit text-center">
          Pick a map
        </h1>

        <div className="group/earth">
          <Link to="/earth">
            <img src="/Earth.png" alt="Earth" className="max-w-100 group-hover/earth:scale-110 transition-transform" />
            <h2 className="text-center group-hover/earth:text-shadow-blue-h1">
              Earth
            </h2>
          </Link>
        </div>

        <div  className="group/moon">
          <Link to="/moon">
            <img src="/Moon.png" alt="Moon" className="max-w-100 group-hover/moon:scale-110 transition-transform" />
            <h2 className="text-center group-hover/moon:text-shadow-blue-h1">
              Moon
            </h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LandingPage
