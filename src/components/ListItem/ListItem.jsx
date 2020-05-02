import React from "react";
import globals from "../../styles/BaseStyles.module.css";
import styles from "./ListItem.module.css";

const ListItem = ({ name, amount, image, index }) => {
  return (
    <div>
      <div className="row justify-content-start align-items-center no-gutters">
        <p className={`${styles.index}`}>{index + 1}.</p>
        <img className={`${styles.avatar} ml-3`} src={image} alt={name} />
        <div class="col ml-3">
          <p className={`${styles.name}`}>{name}</p>
          <p className={`${styles.amount}`}>{amount}</p>
        </div>
      </div>
    </div>
  );
};

const ListItemDetail = ({
  name,
  description,
  time,
  eth,
  bit,
  price,
  avatar,
  secondary,
}) => {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-auto">
          <div>
            <img className={`${styles.secondary}`} src={secondary} alt="" />
            <img
              className={`${styles.avatar} align-self-start`}
              src={avatar}
              alt=""
            />
          </div>
          <div className={`${globals["v-divider"]}`}></div>
        </div>
        <div class="col ml-2 ml-md-4  mb-4">
          <div className="row no-gutters align-items-center">
            <p className={`${styles.name} col-12 col-md-auto mr-auto`}>
              {name}
            </p>
            <p className={`${styles.time} col-12 col-md-auto`}> {time} </p>
          </div>

          <p className={`${styles.description} mt-1`}>{description}</p>
          <div className="row align-items-center no-gutters mt-1">
            {eth && <div className={`${globals.chipOrange} mr-3`}>{eth}</div>}
            {bit && <div className={`${globals.chipBlue} mr-3`}>{bit}</div>}
            <p className={`${globals.rate}`}>
              <span>$</span>
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListItem, ListItemDetail };
