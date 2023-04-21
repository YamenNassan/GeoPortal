import React from "react"; 
import * as ol from 'ol';
import {interaction, layer,custom,control,
    Interactions,Overlays,Control,
    Map,Layers,Overlay,Util}from "react-openlayers";

const HomePage = () => {
    return (
        <div className="HomePage" style={{ width:"100%", height: "100%" }}>
            <Map view={{center: [46.94819489246976, 7.451403390856372],zoom: 2}} style={{width: "100%", height: "100%"}}>
                <Layers></Layers>
                <Layers>
                    <layer.Tile></layer.Tile>
                </Layers>
            </Map> 

        </div>
    );
};

export default HomePage;


