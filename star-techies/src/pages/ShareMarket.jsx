import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShares } from "../redux/action";
import companies from "../companydata.json";
import { Select } from "@chakra-ui/react";

const ShareMarket = () => {

  let data = [];

  const dispatch = useDispatch();

  const sharesdata = useSelector((store) => store.sharesdata);

  const handlesymbol = (e) => {
    if(e.target.value){
    dispatch(getShares(e.target.value))
    }
  }

  let dates = Object.keys(sharesdata);

  useEffect(() => {
  for (let keys in sharesdata) {
    data.push(sharesdata[keys]);
  }
  },[sharesdata])

useEffect(() => {
  if(data.length !== 0){
  console.log(data[0]["1. open"]);
  console.log(dates[0], data[0])
  }
}, [data, sharesdata]);
  

  return (
    <div style={{ overflowY: "scroll" }}>
      ShareMarket
      <Select onClick={(e) => handlesymbol(e)} placeholder="Select option">
        {companies.companies.map((el) => (
          <option value={el.symbol} key={el.id}>
            {el.company_name}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default ShareMarket