import React from "react";
import Template from '../template/Template.jsx';



const getBreadcrumb = () => {
  return [
              {
                name: "Home",
                url: "/"
    },
    {
                name: "Reservations",
                url: "/reservations"
              }
            ];
}


const Reservations = () => {
  return (
    <Template breadcrumb={getBreadcrumb()}>
      <div>Reservations</div>
    </Template>
  );
}
export default Reservations;
