import React, { useEffect, useRef } from "react";

const MapGet = ({ apiKey }) => {
  const mapRef = useRef(null);

  const mapContainerStyle = {
    width: "50vw",
    height: "50vh",
    margin: "auto",
  };

  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the Google Maps API script when the component unmounts
      document.body.removeChild(script);
    };
  }, [apiKey]);

  function initializeMap() {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 3,
    });

    // Add click event listener to the map
    map.addListener("click", (event) => {
      placeMarker(event.latLng, map);
    });
  }

  function placeMarker(location, map) {
    // Remove existing marker (if any)
    if (map.marker) {
      map.marker.setMap(null);
    }

    // Create a marker at the clicked location
    map.marker = new window.google.maps.Marker({
      position: location,
      map: map,
    });
  }

  return <div ref={mapRef} style={mapContainerStyle}></div>;
};

export default MapGet;
