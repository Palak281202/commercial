import React from 'react'
import classes from './Input.module.css';

export default function Input({ title, ...props }) {
    return (
        <div className={classes.div}>
            <label htmlFor="" className={classes.label}>{title}</label>
            <input type="text" className={classes.input} {...props} required/>
        </div>
    )
}
