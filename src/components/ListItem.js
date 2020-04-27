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

const ListItemDetail = () => {
  return (
    <div className={`${classes.listItemDetail}`}>
      <div className="row justify-content-start align-items-center no-gutters">
        <img class="ml-3" src="assets/avatar_daniel.svg" alt="" />
        <div class="col ml-4">
          <p className={`${classes.name}`}>Daniel Belu</p>
          <p className={`${classes.description}`}>Recieved $760 for a Ruby project.</p>
          <div className="row align-items-center no-gutters">
            <div className={classes.chipBlue}>0.9087 ETH</div>
            <p className={classes.amount}><span className={classes.amount}>$</span>2878.90</p>
          </div>
        </div>


      </div>
    </div>
  );
}

export {ListItem, ListItemDetail};
