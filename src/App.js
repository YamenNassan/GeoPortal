import React, { useState } from "react";
import './App.css'; 
import Routes from "./Routes";
import { Helmet } from "react-helmet";
import Layout from "./componen/Layout/Layout";
import { lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme } from "./styles/theme";
import HomePage from "./pages/HomePage";
export const ThemenContext = React.createContext(null);

/*
import "ol/ol.css";
import Map from "ol/map";
import View from "ol/view";
import TileLayer from "ol/layer/tile";
import OSM from "ol/source/osm";


function MapComponent() {
    const mapElement = useRef(null);
    const [map, setMap] = useState(null);
  
    useEffect(() => {
      const initialMap = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
  
      setMap(initialMap);
    }, []);
  
    return <div className="map" ref={mapElement} />;
  }
*/

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  return (
         
      <ThemenContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Geo</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                    <Layout>
                    <Routes>
                            <Routes exact path="/" component={HomePage} />
                        </Routes> 
                    </Layout>
                </>
            </ThemeProvider>
            
        </ThemenContext.Provider>
  );  
};

export default App;
/*
var mapView = new _ol_.View ({center: ol.proj.fromLonLat([74.98, 7,87]), zoom: 8});
var map = new ol.Map ({target:'map', view: mapView});
var osmTile = new ol.layer.Tile ({title:'Open Street Map', visible:true, source: new ol.source.OSM()});

map.addLayer(osmTile);
*/