import React, { useContext, useEffect, useState } from 'react';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

import IpifyContext from '../context/ipify/ipifyContext';

import iconImg from '../images/icon-location.svg';

const Map = () => {
  const icon = new Icon({
    iconUrl: iconImg,
  });

  const ipifyContext = useContext(IpifyContext);

  const { loading, geo } = ipifyContext;

  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });

  const { lat, lng } = position;

  useEffect(() => {
    if (!loading && geo) {
      setPosition({
        lat: geo.location.lat,
        lng: geo.location.lng,
      });
    }
  }, [loading, geo]);

  return (
    <LeafletMap center={[lat, lng]} zoom={13}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={[lat, lng]} icon={icon}></Marker>
    </LeafletMap>
  );
};

export default Map;
