import React from "react";
import { Link } from 'react-router-dom';
class Breadcrumb extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <ul className="breadcrumb">
          {this.props.conf.map(item => (
              <li><Link to={item.url}>{item.name}</Link></li>
          ))}
        </ul>
      );
  }
}
export default Breadcrumb;