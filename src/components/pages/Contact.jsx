import React from "react";
import Template from "../template/Template.jsx";
import validator from "validator";

class Contact extends React.Component {
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
        name: "Contact",
        url: "/contact",
      },
    ];
  }

  handleSubmit() {
    return false;
  }
  render() {
    return (
      <Template slider={this.SliderConfig()} breadcrumb={this.getBreadcrumb()}>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit()}>
          <div>
            <input
              type="text"
              id="formsPrenom"
              placeholder="Prenom"
              name="firstname"
            />
            <span class="error-text">Erreur message</span>
          </div>

          <div>
            <input
              type="text"
              id="formsNom"
              placeholder="Nom"
              name="firstname"
            />
            <span class="error-text">Erreur message</span>
          </div>

          <div>
            <input
              type="email"
              id="formsEmail"
              placeholder="Email"
              name="email"
              className="error-input"
            />
            <span class="error-text">Erreur message</span>
          </div>

          <div>
            <input
              type="text"
              id="formsTelephone"
              placeholder="Téléphone"
              name="phone"
            />
            <span class="error-text">Erreur message</span>
          </div>

          <div>
            <textarea
              id="formsMessage"
              name="message"
              rows="5"
              placeholder="Votre message"
            ></textarea>
            <span class="error-text">Erreur message</span>
          </div>
          <div class="center">
            <button type="submit" className="btn btn-default buzz-out-on-hover">
              Envoyer
            </button>
          </div>
        </form>
      </Template>
    );
  }
}

export default Contact;
