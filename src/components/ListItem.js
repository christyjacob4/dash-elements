import React from "react";
import classes from "../styles/BaseStyles.module.css";

const ListItem = ({ name, amount, image, index }) => {
  return (
    <div className={`${classes.listItem}`}>
      <div className="row justify-content-start align-items-center no-gutters">
        <p className={`${classes.index}`}>{index+1}.</p>
        <img class="ml-3" src={image} alt={name} />
        <div class="col ml-3">
          <p className={`${classes.name}`}>{name}</p>
          <p className={`${classes.amount}`}>{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
