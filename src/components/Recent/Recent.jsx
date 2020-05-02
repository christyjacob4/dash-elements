import React from "react";
import globals from "../../styles/BaseStyles.module.css";
import { ListItemDetail } from "../ListItem/ListItem";

const Recent = () => {
  return (
    <div className={`${globals.card} p-3 p-lg-4`}>
       <header>
        <div className="row justify-content-between align-items-center no-gutters pb-4">
          <p className={globals.title}>RECENT</p>
        </div>
      </header>

      <ListItemDetail/>
      <ListItemDetail/>
      <ListItemDetail/>

    </div>
  );
};

export default Recent;
