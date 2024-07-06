import React from 'react'
import Card from '../UI/Card.js'
import { MEN_WESTERN } from '../../assets/items-list.js'
import classes from '../UI/mensethini.module.css'

export default function MenWestComp() {
    return (
        <div>
            <ul className={classes.ul}>
                {MEN_WESTERN.map((item) => {
                    return <Card item={item} />
                }
                )}
            </ul>
        </div>
    )
}
