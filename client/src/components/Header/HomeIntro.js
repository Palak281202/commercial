import React from 'react'
import classes from './homeIntro.module.css';
import { Link } from 'react-router-dom';
import h1 from '../../assets/1.jpg';
import h2 from '../../assets/2.jpg';
import h3 from '../../assets/3.jpg';

export default function HomeIntro() {
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.header}>
                    <h1 className={classes.h1}>Welcome </h1>
                    <h2 className={classes.h2}>to </h2>
                    <h1 className={classes.h1}>GlitzGrove</h1>
                </div>
                <div>
                    <img
                        src= {h1}
                        alt=""
                        className={classes.img}
                    />
                </div>
            </div>
            <h1 className={classes.topcata}>Top Categories to Choose from</h1>
            <div className={classes.flex}>
                <p>Elevate your style with our exquisite collection of women's and men's wear, where fashion meets elegance, and every outfit tells a unique story. Shop now and embrace the power of confidence in every thread.</p>
                <Link to='/womenswestern'>
                    <img src={h2} alt="" />
                </Link>
                <Link to='/menswestern'>
                    <img src={h3} alt="" />
                </Link>
            </div>
        </div>
    )
}
