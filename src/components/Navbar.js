import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar p-0 py-4">
        <a class="navbar-brand align-bottom" href="#">
          <img
            src="assets/navbar_brand.svg"
            class="d-inline-block align-top"
            alt=""
          />
          <span class="ml-2">Dash</span> Elements
        </a>

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="assets/notification_icon.svg" alt="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Alex Doe
            </a>
          </li>
        </ul>
      </nav>

      <nav class="navbar navbar-expand-lg p-0 pb-5">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="assets/navbar_collapse_menu.svg"></img>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                My Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Payments
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Activity
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
