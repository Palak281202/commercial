import React from 'react'
import Card from '../UI/Card.js'
import { MEN_ETHINIC } from '../../assets/items-list.js'
import classes from '../UI/mensethini.module.css'

export default function MensEthinicCompo() {
    return (
        <div>
            <ul className={classes.ul}>
                {MEN_ETHINIC.map((item) => {
                    return <Card item={item} />
                }
                )}
            </ul>
        </div>
    )
}
