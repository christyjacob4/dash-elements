import React from "react";
import classes from "../styles/BaseStyles.module.css";
import LineChart from "./LineChart";

const Earnings = () => {
  return (
    <div className={`${classes.card} ${classes.earningsCard} p-3 p-lg-4`}>
      <div className="row no-gutters">
        <p className={classes.title}>EARNINGS</p>
      </div>

      <div className="row no-gutters">
        {/* Left column */}
        <div className="col order-1 order-lg-0">
          <div className={"row no-gutters mt-4 mt-lg-3"}>
            <div className="col align-items-center">
              <p className={`${classes.emphasis} text-center text-lg-left`}>
                <span>$</span>2878.90
              </p>
              <p className={`${classes.subtitle} text-center text-lg-left`}>
                <span>+42</span> since last week
              </p>
            </div>

            <div className="col">
              <div className={`${classes.chipBlue} mt-lg-4 mx-auto mx-lg-0`}>0.9087 ETH</div>
              <div className={`${classes.chipOrange} mt-1 mt-lg-2 mx-auto mx-lg-0`}>
                0.5 BTC
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className={"col-12 col-lg-9 mt-1 mt-lg-0"}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
