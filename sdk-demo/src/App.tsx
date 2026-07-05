import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import EarthPage from "./pages/EarthPage";
import MoonPage from "./pages/MoonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/earth" element={<EarthPage />} />
      <Route path="/moon" element={<MoonPage />} />
    </Routes>
  )
}

export default App
