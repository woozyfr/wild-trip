import React from "react";
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  if (!props.length) {
    return (<div></div>)
  }
  return (
    <ul className="breadcrumb">
      {props.conf.map(item => (
          <li><Link to={item.url}>{item.name}</Link></li>
      ))}
    </ul>
  );
}
export default Breadcrumb;