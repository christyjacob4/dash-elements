import React from "react";
import globals from "../../styles/BaseStyles.module.css";
import styles from "./ListItem.module.css"

const ListItem = ({ name, amount, image, index }) => {
  return (
    <div>
      <div className="row justify-content-start align-items-center no-gutters">
        <p className={`${styles.index}`}>{index+1}.</p>
        <img className={`${styles.avatar} ml-3`} src={image} alt={name} />
        <div class="col ml-3">
          <p className={`${styles.name}`}>{name}</p>
          <p className={`${styles.amount}`}>{amount}</p>
        </div>
      </div>
    </div>
  );
};

const ListItemDetail = () => {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-auto">
          <div>
            <img className={`${styles.paid}`} src="assets/avatar_paid.svg" alt="" />
            <img className={`${styles.avatar} align-self-start`} src="assets/avatar_daniel.svg" alt="" />
          </div>
          <div className={`${globals['v-divider']}`}></div>
        </div>
        <div class="col ml-2 ml-md-4  mb-4">
          <div className="row no-gutters align-items-center">
            <p className={`${styles.name} col-12 col-md-auto mr-auto`}>Daniel Belu</p>
            <p className={`${styles.time} col-12 col-md-auto`}> 1 hour ago</p>
          </div>
          
          <p className={`${styles.description} mt-1`}>Recieved $760 for a Ruby project.</p>
          <div className="row align-items-center no-gutters mt-1">
            <div className={`${globals.chipBlue}`}>1.2 ETH</div>
            <p className={`${globals.rate} ml-3`}><span>$</span>760</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export {ListItem, ListItemDetail};
