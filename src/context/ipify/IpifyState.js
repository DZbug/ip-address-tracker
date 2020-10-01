import React, { useReducer } from 'react';
import axios from 'axios';

import IpifyContext from './ipifyContext';
import IpifyReducer from './ipifyReducer';

import { GET_IP, GET_GEO_BY_IP } from '../types';

const api = 'https://agile-everglades-48303.herokuapp.com';

const IpifyState = (props) => {
  const initialState = {
    ip: null,
    geo: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(IpifyReducer, initialState);

  // Получить IP
  const getIp = async () => {
    const res = await axios.get(`${api}/api/ip-address-tracker/ip`);

    dispatch({
      type: GET_IP,
      payload: res.data.ip,
    });
  };

  // Получить геолокацию
  const getGeoByIp = async (domain) => {
    const res = await axios.get(
      encodeURI(`${api}/api/ip-address-tracker/geo?domain=${domain}`)
    );

    dispatch({
      type: GET_GEO_BY_IP,
      payload: res.data,
    });
  };

  return (
    <IpifyContext.Provider
      value={{
        ip: state.ip,
        geo: state.geo,
        loading: state.loading,
        getIp,
        getGeoByIp,
      }}
    >
      {props.children}
    </IpifyContext.Provider>
  );
};

export default IpifyState;
