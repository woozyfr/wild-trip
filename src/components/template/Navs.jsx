import React from "react";


const Navs = () => {
  return (
      <div>
            <header className="header">
              <div className="container">
                <a href="#"><img src="images/logo_w_small.png" className="logo" alt="Bienvenue sur WildTrip"/></a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                  <li><a href="#" title="Acceuil du site">Accueil</a></li>
                  <li><a href="#" title="Choix du pays">Choix Pays</a></li>
                  <li><a href="#"  title="Contactez-nous">Contact</a></li>
                </ul>
              </div>
            </header>
            <div class="fixmenu"></div>
      </div>
  );
}


export default Navs;