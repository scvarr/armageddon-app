import React, { useContext } from 'react'
import { Header } from '../components/header/Header'
import { AsteroidsContext } from '../components/asteroids-context/AsteroidsContext'
import { AsteroidCardImage } from '../components/AsteroidCard/AsteroidCardImage/AsteroidCardImage'
import { AsteroidCard } from '../components/AsteroidCard/AsteroidCard'
import styles from './Asteroids.module.css'

export const Destroyment = () => {
    const { destroyment } = useContext(AsteroidsContext)
    return (
        <>
            <Header />
            <div className={styles.content}>
                <div className={styles.listOfAsteroids}>
                    {destroyment.map((item) => (
                        <AsteroidCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}
