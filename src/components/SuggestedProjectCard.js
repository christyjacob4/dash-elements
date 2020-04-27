import React from "react";
import classes from "../styles/BaseStyles.module.css";

const SuggestedProjectCard = () => {
  return (
    <div className={`${classes.card} ${classes.projectCard}`}>
      {/* Header */}
      <div className={"row no-gutters align-items-center"}>
        <img src="assets/avatar_one.svg" />
        <div className={"col my-auto"}>
          <p className={classes.avatarName}> Alice Martin</p>
          <p className={classes.avatarTime}> 5 hours ago</p>
        </div>
        <div className={`${classes.chipGray} col-auto`}>html</div>
      </div>

      {/* Content */}
      <p className={`${classes.content}`}>
        Design and develop a website for an educational platform focusing on the
        growth of children.
      </p>

      {/* Footer */}
      <hr className={classes.divider} />
      <div className={"row no-gutters align-items-center"}>
        <div className={classes.chipBlue}>1.2 ETH</div>
        <div className={`${classes.chipOrange} mr-auto`}>0.3 BTC</div>
        <h4 className={"my-auto"}>
          <span>$</span>760
        </h4>
      </div>
    </div>
  );
};

export default SuggestedProjectCard;
