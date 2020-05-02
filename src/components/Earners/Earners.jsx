import React from "react";
import globals from "../../styles/BaseStyles.module.css";
import styles from "./Earners.module.css"
import {ListItem} from "../ListItem/ListItem";
import { Items } from "../data";

const Earners = () => {
  return (
    <div className={`${globals.card} p-3 p-lg-4`}>
      <header>
        <div className="row justify-content-between align-items-center no-gutters pb-4">
          <p className={globals.title}>RANKINGS</p>
          <div>
            <a className={`${styles.thisMonth} mr-2`} href="#">
              This month
            </a>
            <a className={styles.allTime} href="#">
              All time
            </a>
          </div>
        </div>
      </header>
  
      {Items.map((item,index) => (
        <div>
            <ListItem index={index} {...item}/>
            {index < Items.length-1? <hr className={globals.divider} /> : null}
        </div>
      ))}
    </div>
  );
};

export default Earners;
