import React from 'react'
import Rank from './Rank'
import SuggestedProjectCard from './SuggestedProjectCard'
import Banner from './Banner'
import classes from '../styles/BaseStyles.module.css'


const App = props => {
  return (
    <div>
      <div className={`${classes.headerBg} position-absolute`}></div>


      <div class="container">

        {/* NAVBAR STARTS */}
        <nav class="navbar p-0 py-4">
          <a class="navbar-brand align-bottom" href="#">
            <img src="assets/navbar_brand.svg" class="d-inline-block align-top" alt="" />
            <span class="ml-2">Dash</span> Elements
          </a>

          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src="assets/notification_icon.svg" alt="" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Alex Doe</a>
            </li>
          </ul>

        </nav>

        <nav class="navbar navbar-expand-lg p-0 pb-5">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <img src="assets/navbar_collapse_menu.svg"></img>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">My Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Payments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Activity</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* NAVBAR ENDS */}

        {/* First row */}
        <div class="row">
          <div class="col-lg-8" >
            <Rank />
          </div>
          <div class="col-lg-4" >
            <Rank />
          </div>
        </div>

        {/* Second Row */}
        <section class="pt-5">
          <div className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}>
            <h1 name="">Suggested Projects</h1>

            <div class="row no-gutters">
              <a href="#" class="mr-2">VIEW ALL PROJECTS</a>
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
              <div className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}>
                <h1 name="">Activity</h1>

                <div class="row no-gutters">
                  <a href="#" class="mr-2">VIEW ALL ACTIVITY</a>
                  <img src="assets/chevron_arrow.svg" alt="" />
                </div>
              </div>
              <SuggestedProjectCard />
            </div>


            <div class="col-lg-4 col-md-6">
            <div className={`row justify-content-between align-items-center no-gutters ${classes.sectionHeader} pb-3`}>
                <h1 name="">Top Earners</h1>

                <div class="row no-gutters">
                  <a href="#" class="mr-2">VIEW ALL</a>
                  <img src="assets/chevron_arrow.svg" alt="" />
                </div>
              </div>
              <SuggestedProjectCard />
            </div>
          </div>
        </section>

      </div>

    </div>



  )
}

export default App