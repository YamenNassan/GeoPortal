import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { Map, View } from "ol";
//import TileLayer from "ol/layer/tile";
//import OSM from "ol/source/osm";

/*
// Erstelle eine View für die Karte
const mapView = new View({ center: [0, 0], zoom: 2,});
  
  // Erstelle eine TileLayer mit OpenStreetMap Daten
  const osmTile = new TileLayer({
    title: "Open Street Map",
    visible: true,
    source: new OSM(),
  });
  
  // Erstelle die Karte und füge die TileLayer hinzu
  const map = new Map({
    target: "map",
    layers: [osmTile],
    view: mapView,
  });

ReactDOM.render(
    <Router>
        <App map={map}/>
    </Router>,
    document.getElementById("root")
);
*/
//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
        <Router>
        <App />
    </Router>,
    document.getElementById("root")
);