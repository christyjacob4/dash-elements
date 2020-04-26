import React from 'react'
import classes from '../styles/BaseStyles.module.css'

const Banner = () => {
    return(
        
        <div className={`${classes.card} ${classes.banner}`}>
            <div class="row no-gutter align-items-center px-auto justify-content-around">
                <img src="assets/slack_icon.svg" alt=""/>

                <div className="col-6">
                    <p className={classes.title} >Join the conversation on Slack</p>
                    <p className={classes.subtitle}>Stay up to date on the latest news and special programs that only take place within the slack channel.</p>
                </div>
               
                <button className={classes['button-outline']}>REMIND LATER</button>
                <button className={classes['button-solid']}>JOIN NOW</button>
            </div>
        </div>
    )
}


export default Banner;