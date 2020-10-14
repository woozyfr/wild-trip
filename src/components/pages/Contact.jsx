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

const getBreadcrumb = () => {
  return [
            {
              name: "Home",
              url: "/"
            },
            {
              name: "Contact",
              url: "/contact"
            }
        ];
}


const Contact = (props) => {
  return (
    <Template slider={SliderConfig()}  breadcrumb={getBreadcrumb()}>

    <h1>Contact</h1>

    <form>
      <div>
        <input type="text" id="formsPrenom" placeholder="Prenom"/>
      </div>

      <div>
        <input type="text" id="formsNom" placeholder="Nom"/>
      </div>

      <div>
        <input type="email" id="formsEmail" placeholder="Email"/>
      </div>

      <div>
        <input type="text" id="formsTelephone" placeholder="Téléphone"/>
      </div>

      <div>
        <textarea id="formsMessage" name="message" rows="5"  placeholder="Votre message"></textarea>
      </div>
      <div class="center">
        <button type="submit" class="btn btn-default buzz-out-on-hover">Envoyer</button>
      </div>
    </form>
    </Template>
  );
}
export default Contact;
