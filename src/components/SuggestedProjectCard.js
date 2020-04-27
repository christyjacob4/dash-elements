import React from "react";
import classes from "../styles/BaseStyles.module.css";

const SuggestedProjectCard = ({
  name,
  time,
  image,
  language,
  description,
  eth,
  bit,
  price,
}) => {
  return (
    <div className={`${classes.card} ${classes.projectCard} p-3 p-lg-4`}>
      {/* Header */}
      <div className={"row no-gutters align-items-center"}>
        <img src={image} />
        <div className={"col my-auto"}>
          <p className={classes.avatarName}> {name}</p>
          <p className={classes.avatarTime}> {time}</p>
        </div>
        <div className={`${classes.chipGray} col-auto`}>{language}</div>
      </div>

      {/* Content */}
      <p className={`${classes.content}`}>{description}</p>

      {/* Footer */}
      <hr className={classes.divider} />
      <div className={"row no-gutters align-items-center"}>
        <div className={classes.chipBlue}>{eth}</div>
        <div className={`${classes.chipOrange} mr-auto`}>{bit}</div>
        <h4 className={"my-auto"}>
          <span>$</span>
          {price}
        </h4>
      </div>
    </div>
  );
};

export default SuggestedProjectCard;
