import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  // InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";



const libraries = ["places"];

const mapContainerStyle = {
  minWidth: "300px",
  height: "250px",
  position: "absolute",
  border: "2px solid black",
  marginLeft: "auto",
  marginRight: "auto",
  left: 0,
  right: 0,
  textAlign: "center",

  
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 38.5293,
  lng: -76.9753,
};

function Map() {

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
  <div>

        
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={(e) =>{
          setMarkers(current => [...current, {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
          }])
        }}
      >
        {markers.map((marker) => (
          <Marker 
            key={marker.time.toISOString()}
            position={{ lat:  38.5293, lng: -76.9753}}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
