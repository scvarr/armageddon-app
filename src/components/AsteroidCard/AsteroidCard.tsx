import React from 'react'
import { AsteroidCardImage } from './AsteroidCardImage/AsteroidCardImage'
import { AsteroidCardAction } from './AsteroidCardAction/AsteroidCardAction'
import styles from './AsteroidCard.module.css'
import { AsteroidCardContent } from './AsteroidCardContent/AsteroidCardContent'

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
    //distanceMode: boolean
}
export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, distance, size, isDangerous } = props
    return (
        <div className={styles.insertgap}>ф
            <div className={isDangerous ? styles.cardRed : styles.cardRegular}>
                <div className={styles.card}>
                    <AsteroidCardImage />
                    <AsteroidCardContent name={name} date={date} distance={distance} size={size} />
                    <AsteroidCardAction isDangerous={isDangerous} />
                </div>
            </div>
            <div className={styles.gap}></div>
        </div>
    )
}
