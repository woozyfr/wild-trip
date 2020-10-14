import React from "react";
import Template from '../template/Template.jsx';



const SliderConfig = () => {
  return {
    title: "Choix déstination",
    subtitle: "Embarcation immédiate.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus impedit soluta quam distinctio",
    backgroundImage:"images/defaultslider.jpg",
    backgroundPosition:"center 50%"
  }
}



const Contact = (props) => {
  return (
    <Template slider={SliderConfig()}>
      <div>Contact</div>
    </Template>
  );
}
export default Contact;
