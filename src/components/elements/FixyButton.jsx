import React from "react";
import { Link } from 'react-router-dom';
class FixyButton extends React.Component {
  render() {
    return (
      <Link to="/Contact" className="hidden-mobile fixedbutton btn btn-default buzz-out-on-hover">Reservation</Link>
    );
    }
}

export default FixyButton;