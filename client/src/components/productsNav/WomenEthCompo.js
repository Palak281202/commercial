import React from 'react'
import Card from '../UI/Card.js'
import { WOMEN_ETHINIC } from '../../assets/items-list.js'
import classes from '../UI/mensethini.module.css'

export default function WomenEthCompo() {
    return (
        <div>
            <ul className={classes.ul}>
                {WOMEN_ETHINIC.map((item) => {
                    return <Card item={item} />
                }
                )}
            </ul>
        </div>
    )
}
