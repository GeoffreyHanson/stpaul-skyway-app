import React, { useState, useEffect } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import getSheetData from '../utils/getSheetData';

const BusinessMarkers = ({ category }) => {
  const [markerData, setMarkerData] = useState([]);
  const [activeMarker, setActiveMarker] = useState({});

  const styles = {
    center: {
      textAlign: 'center',
    },
  };

  // Grabbing data from Google Sheets
  useEffect(() => {
    getSheetData().then((result) => setMarkerData(result));
  }, []);

  // Setting active marker for the InfoWindow
  const onMarkerClick = (businessName, googleLink, position) => {
    setActiveMarker({
      businessName,
      googleLink,
      position,
    });
  };

  return (
    <>
      {markerData.map((marker) => {
        const businessName = marker[0];
        const googleLink = marker[2];

        // Coordinates
        const position = {
          lat: parseFloat(marker[3]),
          lng: parseFloat(marker[4]),
        };

        // If category of the business is the same as the filter,
        // conditionally render the marker.
        return (
          marker[1] === category && (
            <Marker
              key={businessName}
              position={position}
              title={businessName}
              onClick={() => onMarkerClick(businessName, googleLink, position)}
            />
          )
        );
      })}
      {activeMarker.businessName && (
        <InfoWindow
          position={activeMarker.position}
          onCloseClick={() => setActiveMarker({})}
        >
          <div style={styles.center}>
            <b>{activeMarker.businessName}</b>
            <hr />
            <a href={activeMarker.googleLink}>View in Google Maps</a>
          </div>
        </InfoWindow>
      )}
      ;
    </>
  );
};

export default BusinessMarkers;
