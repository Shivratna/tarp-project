/* eslint-disable no-undef */

import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const maps = window.google.maps;

const MapFun = () => {
  const map_container = React.createRef();

  return (
    <div id="map_container" ref={map_container}></div>
  )
}

export default MapFun;