import { IonIcon } from "@ionic/react";
import {
  searchOutline,
  globeOutline,
  reorderTwo,
  closeOutline,
  logoTwitter,
  logoPinterest,
  logoFacebook,
  logoInstagram,
  logoYoutube,
} from "ionicons/icons";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>

          <a href="./index.html" className="logo">
            <img src="./assets/images/logo.svg" alt="Filmlane logo" />
          </a>

          <div className="header-actions">
            <button className="search-btn">
              <IonIcon icon={searchOutline} />
            </button>

            <div className="lang-wrapper">
              <label htmlFor="language">
                <IonIcon icon={globeOutline} />
              </label>

              <select name="language" id="language">
                <option value="en">EN</option>
                <option value="au">AU</option>
                <option value="ar">AR</option>
                <option value="tu">TU</option>
              </select>
            </div>

            <button onClick={()=> navigate('/signin')} className="btn btn-primary">Sign in</button>
          </div>

          <button className="menu-open-btn" data-menu-open-btn>
            <IonIcon icon={reorderTwo} />
          </button>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="./index.html" className="logo">
                <img src="./assets/images/logo.svg" alt="Filmlane logo" />
              </a>

              <button className="menu-close-btn" data-menu-close-btn>
                <IonIcon icon={closeOutline} />
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <a href="./index.html" className="navbar-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link">
                  Movie
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link">
                  Tv Show
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link">
                  Web Series
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link">
                  Pricing
                </a>
              </li>
            </ul>

            <ul className="navbar-social-list">
              <li>
                <a href="#" className="navbar-social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <IonIcon icon={logoPinterest} />
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <IonIcon icon={logoYoutube} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
