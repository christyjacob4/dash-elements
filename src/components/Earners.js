import React from "react";
import classes from "../styles/BaseStyles.module.css";
import ListItem from "./ListItem";

const items = [
  {
    name: "Mathew John",
    amount: " $10938.34",
  },
  {
    name: "Daniel Belu",
    amount: "$9087.10",
  },
  {
    name: "Elizabeth Kin",
    amount: "$6789.90",
  },
  {
    name: "Arosuh Uyt",
    amount: "$6009.00",
  },
];

const Earners = () => {
  return (
    <div className={`${classes.card} ${classes.earners}`}>
      <header>
          <div className="row justify-content-between align-items-center no-gutters pb-4">
            <p className={classes.title}>RANKINGS</p>
            <div className="justify-content-around">
              <a className={classes.thisMonth} href="#">This month</a>
              <a className={classes.allTime} href="#">All time</a>
            </div>
          </div>
      </header>

      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
    </div>
  );
};

export default Earners;
