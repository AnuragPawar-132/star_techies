import axios from "axios";
import * as types from "./actionTypes";


export const getCrypto=(dispatch)=>{

dispatch({type:types.GET_CRYPTO_DATA_REQUEST})
axios
.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=04012efa-cb90-4d62-bf69-8f5172f89c86")
.then((r)=>dispatch({type:types.GET_CRYPTO_DATA_SUCCESS,payload:r.data}))
.catch((e)=>dispatch({type:types.GET_CRYPTO_DATA_FAILURE}))
}

export const getShares = (symbol) => (dispatch) => {
  dispatch({ type: types.GET_SHARES_DATA_REQUEST });
  axios
    .get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}.BSE&outputsize=compact&apikey=YRMLD6QZ0HNET8RN`
    )
    .then((r) =>
      dispatch({ type: types.GET_SHARES_DATA_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_SHARES_DATA_FAILURE }));
};