import React from "react";
import classes from "../styles/BaseStyles.module.css";
import { ListItemDetail } from "./ListItem";

const Recent = () => {
  return (
    <div className={`${classes.card} ${classes.recent} p-3 p-lg-4`}>
       <header>
        <div className="row justify-content-between align-items-center no-gutters pb-4">
          <p className={classes.title}>RECENT</p>
        </div>
      </header>

      <ListItemDetail/>
      <ListItemDetail/>
      <ListItemDetail/>
      <ListItemDetail/>
      

    </div>
  );
};

export default Recent;
