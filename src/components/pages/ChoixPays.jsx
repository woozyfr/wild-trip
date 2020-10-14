import React from "react";
import Template from '../template/Template.jsx';
import PaysList from '../elements/Pays/PaysList';


const SliderConfig = () => {
  return {
    title: "Choix déstination",
    subtitle: "Embarcation immédiate.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus impedit soluta quam distinctio",
    backgroundImage:"images/defaultslider.jpg",
    backgroundPosition:"center 50%"
  }
}


const ChoixPays = (props) => {
  return (
    <Template slider={SliderConfig()}>
      <h1>Choisir un pays</h1>
      <div class="article-section">
        <PaysList/>
      </div>
    </Template>
  );
}
export default ChoixPays;
