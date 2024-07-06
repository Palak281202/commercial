import React, {lazy, Suspense} from 'react'
// import Card from '../UI/Card.js'
import { MEN_WESTERN } from '../../assets/items-list.js'
import classes from '../UI/mensethini.module.css'

export default function MenWestComp() {
    const Card= lazy(()=>import ('../UI/Card.js'));
    return (
        <div>
            <ul className={classes.ul}>
                {MEN_WESTERN.map((item) => {
                    return <Suspense><Card item={item} /></Suspense>
                }
                )}
            </ul>
        </div>
    )
}
