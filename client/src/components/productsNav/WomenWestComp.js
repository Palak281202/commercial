import React, { Suspense, lazy } from 'react'
// import Card from '../UI/Card.js'
import {WOMEN_WESTERN } from '../../assets/items-list.js'
import classes from '../UI/mensethini.module.css'

export default function WomenWestComp() {
    const Card = lazy(()=>import('../UI/Card.js'));
    return (
        <div>
            <ul className={classes.ul}>
                {WOMEN_WESTERN.map((item) => {
                    return <Suspense><Card item={item} /></Suspense>
                }
                )}
            </ul>
        </div>
    )
}

