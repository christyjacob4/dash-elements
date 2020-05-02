import React from "react";
import global from "../../styles/BaseStyles.module.css";
import styles from "./SuggestedProjectCard.module.css";

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
    <div className={`${global.card} p-3 p-md-4`}>
      {/* Header */}
      <div className={"row no-gutters align-items-center mb-4"}>
        <img className={styles.avatar} src={image} />
        <div className={"col my-auto ml-3"}>
          <p className={styles.name}> {name}</p>
          <p className={styles.time}> {time}</p>
        </div>
        <div className={`${global.chipGray}`}>{language}</div>
      </div>

      {/* Content */}
      <p className={`${global.content}`}>{description}</p>

      {/* Footer */}
      <hr className={global.divider} />
      <div className={"row no-gutters align-items-center"}>
        <div className={global.chipBlue}>{eth}</div>
        <div className={`${global.chipOrange} ml-2 mr-auto`}>{bit}</div>
        <p className={`my-auto ${global.rate}`}>
          <span>$</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default SuggestedProjectCard;
