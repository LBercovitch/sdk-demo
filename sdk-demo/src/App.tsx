import { useState } from 'react';
import './App.css'

// Import components
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-editor";

function App() {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  return (
    <>
    <button 
      onClick={() => setShowEditor(!showEditor)}
      style={{
        padding: '10px 15px',
        cursor: 'pointer'
      }}
    >
      {showEditor ? 'Hide Editor' : 'Show Editor'}
    </button>
    <arcgis-map item-id="33b628294cb04e22b6a324c943817b74">
      <arcgis-zoom slot="top-left" />
      {showEditor && <arcgis-editor slot="top-right" />}
    </arcgis-map>
    </>
  )
}

export default App
