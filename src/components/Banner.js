import React from 'react'
import classes from '../styles/BaseStyles.module.css'

const Banner = () => {
    return (

        <div className={`${classes.card} ${classes.banner}`}>
            <div class="row no-gutters align-items-center justify-content-around">

                <div className="text-center my-3">
                    <img src="assets/slack_icon.svg" alt="" />
                </div>


                <div className="col-lg-6 col-md-12 my-3 text-lg-left text-center">
                    <p className={classes.title} >Join the conversation on Slack</p>
                    <p className={classes.subtitle}>Stay up to date on the latest news and special programs that only take place within the slack channel.</p>
                </div>

                <div className="col-lg-4  justify-content-end my-3">
                    <div className="row no-gutters justify-content-around">
                        <button className={`${classes['button-outline']}`}>REMIND LATER</button>
                        <button className={`${classes['button-solid']}`}>JOIN NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner;