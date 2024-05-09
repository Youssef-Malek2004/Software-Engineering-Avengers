import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center of the map
    >
      {/* Map over marker data and render markers */}
      {props.markers &&
        props.markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
    </GoogleMap>
  ))
);

const MapWithMarker = ({ markers }) => {
  return (
    <MapComponent
      markers={markers} // Pass marker data as props
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCukQG4LqeiVrSCUcMnURRO53mPx9hBzok&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default MapWithMarker;
