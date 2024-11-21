import React, { useContext } from 'react'
import styles from './AsteroidCardContent.module.css'
import { AsteroidsContext } from '../../asteroids-context/AsteroidsContext'

type AsteroidCardContentProps = {
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
}
export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
    const { name, date, distance, size } = props
    const { distanceMode } = useContext(AsteroidsContext)
    return (
        <div>
            <div className={styles.contentName}>{name}</div>
            <div className={styles.contetWrapper}>
                <div className={styles.contentData}>{`Дата: ${date}`}</div>
                <div className={styles.contentDistance}>{distanceMode ? `Расстояние: ${distance.kilometers} км` : `Расстояние: ${distance.lunar} расстояний до луны`}</div>
                <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
            </div>
        </div>
    )
}
