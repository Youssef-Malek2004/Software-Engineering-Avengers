import React from "react";
import MapWithMarker from "../Components/MapWithMarker";

const TeacherDonor = () => {
  const markerData = [
    { lat: 37.7749, lng: -122.4194 }, // San Francisco
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 40.7128, lng: -74.006 }, // New York
    // Add more marker locations as needed
  ];

  return (
    <div>
      <h1>Google Maps Marker Preview</h1>
      <MapWithMarker markers={markerData} /> {/* Example marker location */}
    </div>
  );
};

export default TeacherDonor;
