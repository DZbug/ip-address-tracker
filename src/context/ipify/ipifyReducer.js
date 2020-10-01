import { GET_IP, GET_GEO_BY_IP } from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_IP:
      return {
        ...state,
        ip: payload,
        loading: false,
      };
    case GET_GEO_BY_IP:
      return {
        ...state,
        geo: payload,
        loading: false,
      };
    default:
      return state;
  }
};
