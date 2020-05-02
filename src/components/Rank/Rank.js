import React from "react";
import classes from "../../styles/BaseStyles.module.css";

const Rank = (props) => {
  return (
    <div className={`${classes.card} ${classes.rankCard} p-3 p-md-4`}>
      <div className={"row no-gutters"}>
        <div className={"col mr-auto"}>
          <p className={`${classes.title}`}>RANK</p>
          
          <div className="row no-gutters justify-content-start align-items-center mt-3">
            <img src="assets/rank_icon.svg" />
            <p className={`${classes.emphasis} ml-2`}> 607</p>
          </div>
          <p className={classes.subtitle}>
            You’re in top <span> 40% </span>
          </p>
        </div>

        <div className={"col"}>
          <p className={`${classes.title}`}>PROJECTS</p>
          <div className="row no-gutters justify-content-start align-items-center mt-3">
            <img src="assets/projects_icon.svg" />
            <p className={`${classes.emphasis} ml-2`}> 45</p>
          </div>
          <p className={`${classes.subtitle}`}>
            <span> 10 </span> in this month{" "}
          </p>
        </div>
      </div>

      <hr className={classes.divider} />

      <p className={`${classes.title}`}>TOP CATEGORIES</p>
      <div className={"row no-gutters mt-3"}>
        <div className={`${classes.chipGray} mr-2`}>ruby</div>
        <div className={`${classes.chipGray} mr-2`}>clojure</div>
        <div className={`${classes.chipGray} mr-2`}>java</div>
      </div>
    </div>
  );
};

export default Rank;
