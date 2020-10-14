import React from "react";
import { Link } from 'react-router-dom';
const FixyButton = (props) => {

  return (
    <Link to="/Contact" className="hidden-mobile fixedbutton btn btn-default buzz-out-on-hover">Reservation</Link>
  );
}
export default FixyButton;

//, backgroundPosition: props.conf.backgroundPosition, background: 'url('+ process.env.PUBLIC_URL + props.conf.backgroundImage+')' 