import React from 'react'
import {Routes, Route} from "react-router-dom";
import Crypto from '../pages/Crypto';
import ShareMarket from '../pages/ShareMarket';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/sharemarket" element={<ShareMarket />} />
      </Routes>
    </div>
  );
}

export default AllRoutes