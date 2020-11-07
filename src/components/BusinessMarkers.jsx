import React, { useState, useEffect } from 'react';
import { Marker } from '@react-google-maps/api';
import getSheetData from '../utils/getSheetData';

const BusinessMarkers = ({ category }) => {
  const [markerData, setMarkerData] = useState([]);

  // Grabbing data from Google Sheets
  useEffect(() => {
    getSheetData().then((result) => setMarkerData(result));
  }, []);

  return markerData.map((marker) => {
    const businessName = marker[0];

    // Coordinates
    const position = {
      lat: parseFloat(marker[3]),
      lng: parseFloat(marker[4]),
    };

    // If category of the business is the same as the filter,
    // conditionally render the marker.
    return (
      marker[1] === category && (
        <Marker key={businessName} position={position} />
      )
    );

    // TODO: Remove comment after adding tooltip/user guidance for filter.

    // Filtering by category
    // If the filter category is blank, render all
    // return category === '' ? (
    //   <Marker key={businessName} position={position} />
    // ) : (
    //   // Otherwise conditionally render category
    //   marker[1] === category && (
    //     <Marker key={businessName} position={position} />
    //   )
    // );
  });
};

export default BusinessMarkers;
