import React from "react";
import Template from "../template/Template";
import data from "../../data/countries.json";
import { Link } from "react-router-dom";

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.data_country = this.getCountryData(props.match.params.country_slug);
  }

  SliderConfig(dc) {
    return {
      title: dc.name,
      subtitle: dc.slide.punchline,
      text: dc.slide.text,
      backgroundImage: dc.slide.filename,
      backgroundPosition: "center " + dc.slide.backgroundPosition,
    };
  }

  getCountryData(slug) {
    const resultat = data.find((country) => country.slug === slug);
    return resultat;
  }

  getBreadcrumb() {
    return [
      {
        name: "Home",
        url: "/",
      },
    ];
  }

  render() {
    return (
      <Template
        slider={this.SliderConfig(this.data_country)}
        breadcrumb={this.getBreadcrumb()}
      >
        <h1>{this.data_country.name}</h1>
        <div className="lateral-title fadeIn">{this.data_country.name}</div>
        <div className="row" id="article">
          <div className="column">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cupiditate veritatis voluptatem. Odio placeat maxime minus
              reprehenderit laudantium aperiam amet velit tempora cupiditate
              ipsum quibusdam, odit adipisci aut vitae voluptatibus?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sapiente cupiditate
              veritatis voluptatem. Odio placeat maxime minus reprehenderit
              laudantium aperiam amet velit tempora cupiditate ipsum quibusdam,
              odit adipisci aut vitae voluptatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cupiditate veritatis voluptatem. Odio placeat maxime minus
              reprehenderit laudantium aperiam amet velit tempora cupiditate
              ipsum quibusdam, odit adipisci aut vitae voluptatibus?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sapiente cupiditate
              veritatis voluptatem. Odio placeat maxime minus reprehenderit
              laudantium aperiam amet velit tempora cupiditate ipsum quibusdam,
              odit adipisci aut vitae voluptatibus?
            </p>
            <img
              src={this.data_country.content[0].filename}
              className="img-responsive"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cupiditate veritatis voluptatem. Odio placeat maxime minus
              reprehenderit laudantium aperiam amet velit tempora cupiditate
              ipsum quibusdam, odit adipisci aut vitae voluptatibus?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sapiente cupiditate
              veritatis voluptatem. Odio placeat maxime minus reprehenderit
              laudantium aperiam amet velit tempora cupiditate ipsum quibusdam,
              odit adipisci aut vitae voluptatibus?
            </p>
            <h3>{this.data_country.content[0].title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cupiditate veritatis voluptatem. Odio placeat maxime minus
              reprehenderit laudantium aperiam amet velit tempora cupiditate
              ipsum quibusdam, odit adipisci aut vitae voluptatibus?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sapiente cupiditate
              veritatis voluptatem. Odio placeat maxime minus reprehenderit
              laudantium aperiam amet velit tempora cupiditate ipsum quibusdam,
              odit adipisci aut vitae voluptatibus?
            </p>
            <div className="center">
              <Link
                to="/Reservations"
                className="btn btn-default btn-reservation"
              >
                Reservation
              </Link>
            </div>
          </div>
          <div className="column">
            <img
              src={this.data_country.content[1].filename}
              className="img-responsive"
              alt=""
            />
            <h3>{this.data_country.content[1].title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cupiditate veritatis voluptatem. Odio placeat maxime minus
              reprehenderit laudantium aperiam amet velit tempora cupiditate
              ipsum quibusdam, odit adipisci aut vitae voluptatibus?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sapiente cupiditate
              veritatis voluptatem. Odio placeat maxime minus reprehenderit
              laudantium aperiam amet velit tempora cupiditate ipsum quibusdam,
              odit adipisci aut vitae voluptatibus?
            </p>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
            <h3>{this.data_country.content[2].title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cupiditate veritatis voluptatem. Odio placeat maxime minus
              reprehenderit laudantium aperiam amet velit tempora cupiditate
              ipsum quibusdam, odit adipisci aut vitae voluptatibus?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sapiente cupiditate
              veritatis voluptatem. Odio placeat maxime minus reprehenderit
              laudantium aperiam amet velit tempora cupiditate ipsum quibusdam,
              odit adipisci aut vitae voluptatibus?
            </p>
            <img
              src={this.data_country.content[2].filename}
              className="img-responsive"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              enim id nisi quos ab cum, incidunt velit, error, aliquid dolorem
              adipisci impedit omnis natus. Aspernatur, veritatis! Commodi fugit
              temporibus minima?
            </p>
          </div>
        </div>
      </Template>
    );
  }
}

export default Country;
