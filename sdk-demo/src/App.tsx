import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage";
import { earthConfig } from "./config/earthConfig";
import { moonConfig } from "./config/moonConfig";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/earth" element={<MapPage mapConfig={earthConfig} />} />
      <Route path="/moon" element={<MapPage mapConfig={moonConfig} />} />
    </Routes>
  )
}

export default App
