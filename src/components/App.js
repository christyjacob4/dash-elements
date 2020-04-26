import React from 'react'
import Rank from './Rank'
import SuggestedProjectCard from './SuggestedProjectCard'
import classes from '../styles/BaseStyles.module.css'


const App = props => {
  return (
    <div>


      <div className={classes.headerBg}></div>

      <div class="container">
        
        <nav class="navbar">
          <a class="navbar-brand" href="#">
            <img src="assets/nav_logo.svg" alt="" />
          </a>
        </nav>

        <nav class="navbar">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Payments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Activity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Settings</a>
            </li>
          </ul>
        </nav>

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
        <section>
        <div class="row justify-content-between align-items-center no-gutters">
          <h1>Suggested Projects</h1>
          <h3>VIEW ALL PROJECTS</h3>
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
        
      </div>

    </div>



  )
}

export default App