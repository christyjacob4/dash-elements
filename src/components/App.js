import React from "react";
import Rank from "./Rank";
import SuggestedProjectCard from "./SuggestedProjectCard";
import Banner from "./Banner";
import classes from "../styles/BaseStyles.module.css";
import Navbar from "./Navbar";
import Earners from "./Earners";

const App = (props) => {
  return (
    <div>
      <div className={`${classes.headerBg} position-absolute`}></div>

      <div class="container">
        {/* NAVBAR STARTS */}
        <Navbar />
        {/* NAVBAR ENDS */}

        {/* First row */}
        <div class="row">
          <div class="col-lg-8">
            <Rank />
          </div>
          <div class="col-lg-4">
            <Rank />
          </div>
        </div>

        {/* Second Row */}
        <section class="pt-5">
          <div
            className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}
          >
            <h1 name="">Suggested Projects</h1>

            <div class="row no-gutters">
              <a href="#" class="mr-2">
                VIEW ALL PROJECTS
              </a>
              <img src="assets/chevron_arrow.svg" alt="" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6">
              <SuggestedProjectCard />
            </div>
            <div class="col-lg-4 col-md-6">
              <SuggestedProjectCard />
            </div>
            <div className={`col-lg-4 col-md-6`}>
              <SuggestedProjectCard />
            </div>
          </div>
        </section>

        {/* Banner */}
        <div class="row no-gutters pt-5">
          <div class="col-12">
            <Banner />
          </div>
        </div>

        {/* Third Row */}
        <section class="pt-5">
          <div class="row">
            <div class="col-lg-8 col-md-6">
              <div
                className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}
              >
                <h1 name="">Activity</h1>

                <div class="row no-gutters">
                  <a href="#" class="mr-2">
                    VIEW ALL ACTIVITY
                  </a>
                  <img src="assets/chevron_arrow.svg" alt="" />
                </div>
              </div>
              <SuggestedProjectCard />
            </div>

            <div class="col-lg-4 col-md-6">
              <div
                className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}
              >
                <h1 name="">Top Earners</h1>

                <div class="row no-gutters">
                  <a href="#" class="mr-2">
                    VIEW ALL
                  </a>
                  <img src="assets/chevron_arrow.svg" alt="" />
                </div>
              </div>
              <Earners />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
