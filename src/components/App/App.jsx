import React, { useEffect } from "react";
import Rank from "../Rank/Rank";
import SuggestedProjectCard from "../SuggestedProjectCard/SuggestedProjectCard";
import Banner from "../Banner/Banner";
import globals from "../../styles/BaseStyles.module.css";
import Navbar from "../Navbar/Navbar";
import Earners from "../Earners/Earners";
import { CardItems } from "../data";
import Earnings from "../Earnings/Earnings";
import Recent from "../Recent/Recent";

const App = (props) => {
  useEffect(() => {
    document.title = "Dash Elements"
  }, []);

  return (
    <div>
      <div className={`${globals.headerBg} position-absolute`}></div>
      
      <div className="container">
        {/* NAVBAR STARTS */}
        <Navbar />
        {/* NAVBAR ENDS */}

        {/* First row */}
        <div class="row align-items-center">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <Earnings />
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <Rank />
          </div>
        </div>
        {/* First Row ENDS */}

        {/* Second Row */}
        <section class="mt-lg-5">

          <div className={`row justify-content-between align-items-baseline no-gutters mb-4`}>
            <p className={`${globals.heading} col-1 col-sm-auto`}>Suggested Projects</p>
            <div class="row no-gutters">
              <a href="#" className={`${globals.sectionHeader} mr-2`}>
                VIEW ALL PROJECTS
              </a>
              <img src="assets/chevron_arrow.svg" alt="" className={globals.sectionHeader}/>
            </div>
          </div>

          <div class="row">
            {CardItems.map((item, index) => 
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <SuggestedProjectCard  {...item} />
              </div>
            )}
          </div>
        </section>
        {/* Second Row ENDS*/}

        {/* Banner */}
        <div class="row mt-lg-5 mt-3 mb-4 mb-lg-0">
          <div class="col-12">
            <Banner />
          </div>
        </div>
        {/* Banner ENDS */}

        {/* Third Row */}
        <section class="mt-lg-5">
          <div class="row">
            <div class="col-lg-8 col-12">
              <div
                className={`row align-items-baseline no-gutters pb-3`}
              >
                <p className={globals.heading}>Activity</p>

                <div class="row no-gutters ml-auto">
                  <a href="#" className={`${globals.sectionHeader} mr-2`}>
                    VIEW ALL ACTIVITY
                  </a>
                  <img src="assets/chevron_arrow.svg" alt="" className={globals.sectionHeader}/>
                </div>
              </div>
              <Recent/>
            </div>

            
            <div class="col-lg-4 col-12 mt-4 mt-lg-0">
              <div
                className={`row align-items-baseline no-gutters ${globals.sectionHeader} pb-3`}
              >
                <p className={globals.heading}>Top Earners</p>
                <div class="row no-gutters ml-auto">
                  <a href="#" className={`${globals.sectionHeader} mr-2`}>
                    VIEW ALL
                  </a>
                  <img src="assets/chevron_arrow.svg" alt="" className={globals.sectionHeader}/>
                </div>
              </div>
              <Earners />
            </div>
          </div>
        </section>
        {/* Third Row ENDS */}

        {/* Footer */}
        <footer class="footer mt-auto py-5">
          <div class="container text-center">
            <span class="text-muted">Made with <span className="text-danger">❤</span> using React and Bootstrap.</span>
          </div>
          <div class="container text-center">
            <span class="text-muted">Copyright © 2020 Christy Jacob</span>
          </div>
          <div className="row justify-content-center mt-2 align-content-between">
            <a class="mr-2" href="https://github.com/christyjacob4/dash-elements"><img src="https://img.shields.io/github/stars/christyjacob4/dash-elements?color=green&logo=github&style=flat" alt=""/></a>
            <a class="mr-2" href="https://reactjs.org/"><img src="https://img.shields.io/static/v1?label=React&message=16.13.1&color=61DAFB&logo=react&style=flat" alt=""/></a>
            <a class="mr-2" href="https://getbootstrap.com/"><img src="https://img.shields.io/static/v1?label=Bootstrap&message=4.4.1&color=563D7C&logo=Bootstrap&style=flat" alt=""/></a>
            <a href="https://app.netlify.com/sites/peaceful-wilson-d0b275/deploys"><img src="https://api.netlify.com/api/v1/badges/3859e702-6a11-46d6-8faf-7a3f3096c637/deploy-status" alt=""/></a>
          </div>
         </footer>
        {/* Footer ENDS */}
      </div>
    </div>
  );
};

export default App;
