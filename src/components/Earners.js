import React from "react";
import classes from "../styles/BaseStyles.module.css";
import ListItem from "./ListItem";
import { Items } from "./data";

const Earners = () => {
  return (
    <div className={`${classes.card} ${classes.earners} p-3 p-lg-4`}>
      <header>
        <div className="row justify-content-between align-items-center no-gutters pb-4">
          <p className={classes.title}>RANKINGS</p>
          <div>
            <a className={`${classes.thisMonth} mr-2`} href="#">
              This month
            </a>
            <a className={classes.allTime} href="#">
              All time
            </a>
          </div>
        </div>
      </header>
  
      {Items.map((item,index) => (
        <div>
            <ListItem index={index} {...item}/>
            {index < Items.length-1? <hr className={classes.divider} /> : null}
        </div>
      ))}
    </div>
  );
};

export default Earners;
