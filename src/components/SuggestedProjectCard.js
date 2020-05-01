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
      <div className={"row no-gutters align-items-center mb-4"}>
        <img src={image} />
        <div className={"col my-auto ml-3"}>
          <p className={classes.avatarName}> {name}</p>
          <p className={classes.avatarTime}> {time}</p>
        </div>
        <div className={`${classes.chipGray}`}>{language}</div>
      </div>

      {/* Content */}
      <p className={`${classes.content}`}>{description}</p>

      {/* Footer */}
      <hr className={classes.divider} />
      <div className={"row no-gutters align-items-center"}>
        <div className={classes.chipBlue}>{eth}</div>
        <div className={`${classes.chipOrange} ml-2 mr-auto`}>{bit}</div>
        <p className={`my-auto ${classes.rate}`}>
          <span>$</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default SuggestedProjectCard;
