import React from "react";
import Template from "../template/Template.jsx";

class Reservations extends React.Component {
  getBreadcrumb() {
    return [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Reservations",
        url: "/reservations",
      },
    ];
  }

  render() {
    return (
      <Template breadcrumb={this.getBreadcrumb()}>
        <div>Reservations</div>
      </Template>
    );
  }
}

export default Reservations;
