import React from 'react';
import classes from '../styles/BaseStyles.module.css';

const Rank = props => {
    return (
        <div className={`${classes.card} ${classes.rankCard}`}>
            <div className={"row no-gutters"}>
                <div className={"col mr-auto"}>
                    <h4>RANK</h4>
                    <h5> <img src="assets/rank_icon.svg"/> 607 </h5>
                    <p> You’re in top <span> 40% </span></p>
                </div>
                <div className={"col"}>
                    <h4>PROJECTS</h4>
                    <h5> <img src="assets/projects_icon.svg" /> 45 </h5>
                    <p><span> 10 </span> in this month </p>
                </div>
            </div>
            <hr className={classes.divider} />
            <h4>TOP CATEGORIES</h4>
            <div className={"row no-gutters justify-content-between"}>
                <div className={classes.chipGray}>
                    ruby
                </div>
                <div className={classes.chipGray}>
                    clojure
                </div>
                <div className={classes.chipGray}>
                    java
                </div>
            </div>
        </div>
    )
}

export default Rank;