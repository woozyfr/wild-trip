import React from "react";
import PaysCards from './PaysCards';
import data from '../../../data/countries.json';

function getPaysData() {
  return data;
}

const PaysList = () => {
  return (
    <div>
        {getPaysData().map(countryDetails => (
          <PaysCards data={countryDetails}/>
        ))}
    </div>
  );
}
export default PaysList;