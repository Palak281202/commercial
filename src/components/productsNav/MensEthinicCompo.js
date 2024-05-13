import React, { Suspense, lazy } from 'react'
// import Card from '../UI/Card.js'
import { MEN_ETHINIC } from '../../assets/items-list.js'
import classes from '../UI/mensethini.module.css'

export default function MensEthinicCompo() {
    const Card= lazy(()=>import ('../UI/Card.js'));
    return (
        <div>
            <ul className={classes.ul}>
                {MEN_ETHINIC.map((item) => {
                    return <Suspense><Card item={item} /></Suspense>
                }
                )}
            </ul>
        </div>
    )
}
