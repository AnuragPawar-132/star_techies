import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShares } from "../redux/action";
import companies from "../companydata.json";
import { Select } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from "chart.js";
import RealTimeIndex from "../components/RealTimeIndex";

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement);

const ShareMarket = () => {

  const [chartdata, setChartdata] = useState();

  let open = [];
  let high = [];
  let low = [];
  let close = [];
  let volume = [];
  let dates = [];

  const dispatch = useDispatch();

  const sharesdata = useSelector((store) => store.sharesdata);

  const handlesymbol = (e) => {
    if(e.target.value){
    dispatch(getShares(e.target.value))
    }
  }

  useEffect(() => {
    for(var key in sharesdata["Time Series (Daily)"]){
      dates.push(key);
      open.push(sharesdata["Time Series (Daily)"][key]["1. open"]);
      high.push(sharesdata["Time Series (Daily)"][key]["2. high"]);
      low.push(sharesdata["Time Series (Daily)"][key]["3. low"]);
      close.push(sharesdata["Time Series (Daily)"][key]["4. close"]);
      volume.push(sharesdata["Time Series (Daily)"][key]["5. volume"]);
    }
     console.log(sharesdata);
  },[sharesdata])

  useEffect(() => {

    if(dates.length > 0 && open.length > 0){
      const newdata = {
        labels: dates,
        datasets: [
          {
            label: "Daily chart",
            data: open,
            backgroundColor: "yellow",
          },
        ],
      };
      setChartdata(newdata);
    }
  }, [dates, open]);


  return (
    <div style={{  height: "500px",minWidth:"450px" }} >
      <RealTimeIndex/>
      
      <Select
        size="md"
        onClick={(e) => handlesymbol(e)}
        placeholder="Please Select Componay Name"
        margin="auto"
        marginTop="5%"
        width="75%"
      >
        {companies.companies.map((el) => (
          <option value={el.symbol} key={el.id}>
            {el.company_name}
          </option>
        ))}
      </Select>

      {chartdata ? <div style={{ display:"flex",width:"90%",height:"400px", overflowY:"scroll",justifyContent:"center",margin:"auto",marginTop:"50px"}}> 
        <Line data={chartdata} />
      </div> : ""}
    </div>
  );
}

export default ShareMarket