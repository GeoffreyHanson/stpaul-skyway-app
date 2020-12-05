import React, { useState, useEffect } from 'react';
import { Marker } from '@react-google-maps/api';

// These functions are place holders, and should display meaningful information for the user
function HandleGeolocationFailure() {
  console.log('Geolocation failed.');
}

function HandleGeolocationDisabled() {
  console.log('Browser does not have geolocation enabled.');
}

const postiionUpdateInterval = 2000;

export default function UserLocationMarker() {
  const [userPosition, setUserPosition] = useState();

  useEffect(() => {
    // Check to see if browser has geolocation
    if (navigator.geolocation) {
      const timer = setTimeout(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          // This second callback will be called if there's an error
          () => {
            HandleGeolocationFailure();
          },
        );
      }, postiionUpdateInterval);
      // Return a function to clear the timeout when the component is unmounted
      return () => clearTimeout(timer);
    }

    // If we are here, it means the browser does not have geolocation, or it has been disabled
    HandleGeolocationDisabled();
  });

  if (userPosition) return <Marker position={userPosition} />;
  return null;
}
