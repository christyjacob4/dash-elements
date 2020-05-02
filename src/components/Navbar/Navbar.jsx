import React from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-md px-0 py-0 pt-3 pt-md-5 justify-content-start align-items-baseline">
            <button className={`navbar-toggler ${styles.collapseButton} p-0`} data-toggle="collapse" data-target="#collapse-target">
              <img className={`${styles.menu}`} src="assets/navbar_collapse_menu.svg"></img>
            </button>

            <a href="#" className="navbar-brand ml-3 ml-md-0">
              <img className={`${styles.brandImage}`} src="assets/navbar_brand.svg" alt=""/>
            </a>

            <span className={`navbar-text d-none d-md-inline ${styles.brandStrong}`}>Dash <span className={`${styles.brand}`}>Elements</span> </span>

          <div className="row no-gutters ml-auto align-items-center">

            <div className="col mr-5 d-none d-md-inline">
              <img src="assets/notification.svg"></img>
              <div class={`badge badge-pill badge-light ${styles.badge}`}>3</div>
            </div>

            <p className={`${styles.account} mr-2`}>Alex Doe</p>
            
            <button className={`${styles.dropdownButton}`}>
              <img className={``} src="assets/dropdown_icon.svg"></img>
            </button>
          </div>  
        
      </nav>

      <nav className={`navbar navbar-expand-md sticky-top px-0 pt-3 pt-md-4 pb-4 `}>
        <div id="collapse-target" className={`collapse navbar-collapse`}>
          <ul className="navbar-nav">
            <li className=""><a href="#" className={`${styles['navbar-item']}`}>Home</a></li>
            <li className="mt-4 mt-md-0"><a href="#" className={`${styles['navbar-item']}`}>My Projects</a></li>
            <li className="mt-4 mt-md-0"><a href="#" className={`${styles['navbar-item']}`}>Payments</a></li>
            <li className="mt-4 mt-md-0"><a href="#" className={`${styles['navbar-item']}`}>Activity</a></li>
            <li className="mt-4 mt-md-0"><a href="#" className={`${styles['navbar-item']}`}>Settings</a></li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
