import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from'./productNavigation.module.css'

export default function ProductNavigation() {
    return (
        <div>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <NavLink
                        to='/mensethinic'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        Men's Ethinic
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink
                        to='/menswestern'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        Men's Western
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink
                        to='/womensethinic'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        Women's Ethinic
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink
                        to='/womenswestern'
                        className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                        Women's Western
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
