import React from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark px-0 pt-3 pt-md-5 justify-content-start align-items-baseline">
            <button className={`navbar-toggler ${styles.collapseButton} p-0`} data-toggle="collapse" data-target="#collapse-target">
              <img src="assets/navbar_collapse_menu.svg"></img>
            </button>

            <a href="#" className="navbar-brand ml-3 ml-md-0">
              <img src="assets/navbar_brand.svg" alt=""/>
            </a>

            <span className="navbar-text d-none d-md-inline">Dash Elements</span>

      </nav>

      <nav className="navbar navbar-expand-md navbar-dark sticky-top px-0">
        <div id="collapse-target" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">My Projects</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Payments</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Activity</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Settings</a></li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
