import React from "react";
import classes from "../styles/BaseStyles.module.css";

const Rank = (props) => {
  return (
    <div className={`${classes.card} ${classes.rankCard} p-3 p-lg-4`}>
      <div className={"row no-gutters"}>
        <div className={"col mr-auto"}>
          <h4>RANK</h4>
          <div name="rank" class="mb-2">
            {" "}
            <img src="assets/rank_icon.svg" />{" "}
            <span class="align-bottom"> 607</span>{" "}
          </div>
          <p>
            {" "}
            You’re in top <span> 40% </span>
          </p>
        </div>
        <div className={"col"}>
          <h4>PROJECTS</h4>
          <div name="rank" class="mb-2">
            {" "}
            <img src="assets/projects_icon.svg" />{" "}
            <span class="align-bottom"> 45</span>{" "}
          </div>
          <p>
            <span> 10 </span> in this month{" "}
          </p>
        </div>
      </div>
      <hr className={classes.divider} />
      <h4>TOP CATEGORIES</h4>
      <div className={"row no-gutters"}>
        <div className={`${classes.chipGray} mr-2`}>ruby</div>
        <div className={`${classes.chipGray} mr-2`}>clojure</div>
        <div className={`${classes.chipGray} mr-2`}>java</div>
      </div>
    </div>
  );
};

export default Rank;
