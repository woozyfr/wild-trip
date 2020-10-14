import React from "react";
import { Link } from 'react-router-dom';

const Navs = () => {
  return (
    <div>
      

            <header className="header">
              <div className="container">
                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/logo_w_small.png'} className="logo" alt="Bienvenue sur WildTrip"/></Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/choix-pays">Choix Pays</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </header>
            <div className="fixmenu"></div>
      </div>
  );
}


export default Navs;



