import React, { useContext } from 'react'
import { AsteroidCardImage } from './AsteroidCardImage/AsteroidCardImage'
import { AsteroidCardAction } from './AsteroidCardAction/AsteroidCardAction'
import styles from './AsteroidCard.module.css'
import { AsteroidCardContent } from './AsteroidCardContent/AsteroidCardContent'
import { AsteroidsContext } from '../asteroids-context/AsteroidsContext'

type AsteroidCardProps = {
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
    isDangerous: boolean
    id: string
    destroy: boolean
    //distanceMode: boolean
}
export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, distance, size, isDangerous, id } = props

    const { addAsteroid} = useContext(AsteroidsContext)
    return (
        <div className={styles.insertgap}>
            <div className={isDangerous ? styles.cardRed : styles.cardRegular}>
                <div className={styles.card}>
                    <AsteroidCardImage />
                    <AsteroidCardContent name={name} date={date} distance={distance} size={size} />
                    <AsteroidCardAction isDangerous={isDangerous} id={id} addClick={()=>addAsteroid(props)}/>
                </div>
            </div>
            <div className={styles.gap}></div>
        </div>
    )
}