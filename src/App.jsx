import React from 'react';
import Div100vh from "react-div-100vh";
import Map from './components/Map/Map';
import ReportBtn from './components/ReportBtn';

function App() {
  return (
    <>
      <Div100vh>
        <Map />
        <ReportBtn />
      </Div100vh>
    </>
  );
}

export default App;
