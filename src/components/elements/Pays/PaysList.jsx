import React from "react";
import PaysCards from './PaysCards';
import data from '../../../data/countries.json';



class PaysList extends React.Component {

  getPaysData() {
    return data;
  }

  render() {
          return (
            <div>
                {this.getPaysData().map(countryDetails => (
                  <PaysCards data={countryDetails} key={countryDetails.name}/>
                ))}
            </div>
          );
        }
}
export default PaysList;