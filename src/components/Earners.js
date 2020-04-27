import React from "react";
import classes from "../styles/BaseStyles.module.css";
import ListItem from "./ListItem";

const Earners = () => {
  return (
    <div className={`${classes.card} ${classes.earners}`}>
        <header>
        <p class="d-block">RANKINGS</p>
        <div className="float-right">
          <p>RANKINGS</p>
        </div>
        </header>
        

      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
    </div>
  );
};

export default Earners;
