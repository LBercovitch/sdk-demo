import './App.css'

// Import components
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";

function App() {
  return (
    <arcgis-map item-id="33b628294cb04e22b6a324c943817b74">
      <arcgis-zoom slot="top-left" />
    </arcgis-map>
  )
}

export default App
