import * as types from "./actionTypes";

const initstate = {
  cryptodata: [],
  sharesdata:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CRYPTO_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_CRYPTO_DATA_SUCCESS:
      return {
        ...state,
        cryptodata: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_CRYPTO_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_SHARES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SHARES_DATA_SUCCESS:
      //console.log(payload["Time Series (Daily)"]);
      
      return {
        ...state,
        sharesdata:payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_SHARES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
