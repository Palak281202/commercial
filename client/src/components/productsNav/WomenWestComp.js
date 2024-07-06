import React from 'react'
import Card from '../UI/Card.js'
import {WOMEN_WESTERN } from '../../assets/items-list.js'
import classes from '../UI/mensethini.module.css'

export default function WomenWestComp() {
    return (
        <div>
            <ul className={classes.ul}>
                {WOMEN_WESTERN.map((item) => {
                    return <Card item={item} />
                }
                )}
            </ul>
        </div>
    )
}

