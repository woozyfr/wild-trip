import React from "react";
import Template from "../template/Template.jsx";
import PaysList from "../elements/Pays/PaysList";

class ChoixPays extends React.Component {
  constructor(props) {
    super(props);
  }

  SliderConfig() {
    return {
      title: "Choix déstination",
      subtitle: "Embarcation immédiate.",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus impedit soluta quam distinctio",
      backgroundImage: "images/defaultslider.jpg",
      backgroundPosition: "center 50%",
    };
  }

  getBreadcrumb() {
    return [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Choix Pays",
        url: "/choix-pays",
      },
    ];
  }

  render() {
    return (
      <Template slider={this.SliderConfig()} breadcrumb={this.getBreadcrumb()}>
        <h1>Choisir un pays</h1>
        <div class="article-section">
          <PaysList />
        </div>
      </Template>
    );
  }
}

export default ChoixPays;
