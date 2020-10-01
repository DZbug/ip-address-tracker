import React, { useContext, useEffect, useState } from 'react';

import Spinner from './Spinner';

import IpifyContext from '../context/ipify/ipifyContext';

const Address = () => {
  const ipifyContext = useContext(IpifyContext);

  const { loading, ip, geo, getIp, getGeoByIp } = ipifyContext;

  const [value, setValue] = useState('');

  useEffect(() => {
    getIp();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (ip) {
      getGeoByIp(ip);
    }
    // eslint-disable-next-line
  }, [ip]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getGeoByIp(value);
  };

  return (
    <div className='header'>
      <div className='container'>
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search for any IP address or domain'
            value={value}
            onChange={handleChange}
            required
          />
          <button type='submit'></button>
        </form>
      </div>
      <div className='container'>
        <div className='result'>
          <div>
            <div>
              <h2>IP Address</h2>
              {!loading && geo ? <p>{geo.ip}</p> : <Spinner />}
            </div>
            <div>
              <h2>Location</h2>
              {!loading && geo ? <p>{geo.location.city}</p> : <Spinner />}
            </div>
            <div>
              <h2>Timezone</h2>
              {!loading && geo ? (
                <p>{`UTC${geo.location.timezone}`}</p>
              ) : (
                <Spinner />
              )}
            </div>
            <div>
              <h2>ISP</h2>
              {!loading && geo ? <p>{geo.isp}</p> : <Spinner />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
