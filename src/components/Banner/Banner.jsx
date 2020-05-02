import React from "react";
import globals from "../../styles/BaseStyles.module.css";
import bannerStyles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`${globals.card} ${bannerStyles.banner} p-3 p-md-4`}>
      <div class="row no-gutters align-items-center justify-content-around">
        <div className="text-center my-3">
          <img className={bannerStyles.primary} src="assets/slack_icon.svg" alt="" />
        </div>

        <div className="col-lg-6 col-md-12 my-2 text-lg-left text-center">
          <p className={`${bannerStyles.title} mb-3`}>Join the conversation on Slack</p>
          <p className={bannerStyles.subtitle}>
            Stay up to date on the latest news and special programs that only
            take place within the slack channel.
          </p>
        </div>

        <div className="col-lg-4  justify-content-end my-3">
          <div className="row no-gutters justify-content-around">
            <div className="col-auto">
              <button className={`${globals["button-outline"]}`}>
                REMIND LATER
              </button>
            </div>
            <div className="col-auto">
              <button className={`${globals["button-solid"]}`}>JOIN NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
