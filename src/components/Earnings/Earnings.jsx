import React from "react";
import global from "../../styles/BaseStyles.module.css";
import styles from "./Earnings.module.css"
import LineChart from "../LineChart/LineChart";

const Earnings = () => {
  return (
    <div className={`${global.card} p-3 p-md-4`}>
      <div className="row no-gutters">
        <p className={global.title}>EARNINGS</p>
      </div>

      <div className="row no-gutters">
        {/* Left column */}
        <div className="col order-1 order-lg-0">
          <div className={"row no-gutters mt-4 mt-lg-3"}>
            <div className="col align-items-center">
              <p className={`${global.emphasis} text-center text-lg-left`}>
                <span className={styles.currency}>$</span>2878.90
              </p>
              <p className={`${global.subtitle} text-center text-lg-left`}>
                <span className={styles.delta}>+42</span> since last week
              </p> 
            </div>

            <div className="col">
              <div className={`${global.chipBlue} mt-lg-4 mx-auto mx-lg-0`}>0.9087 ETH</div>
              <div className={`${global.chipOrange} mt-1 mt-lg-2 mx-auto mx-lg-0`}>
                0.5 BTC
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className={`col-12 col-lg-9 mt-2 mt-lg-0 ${styles.chartContainer}`}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
