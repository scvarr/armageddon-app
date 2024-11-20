import { Header } from '../components/header/Header'
import styles from './Asteroids.module.css'
import { AsteroidCard } from '../components/AsteroidCard/AsteroidCard'
import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { AsteroidsContext } from '../components/asteroids-context/AsteroidsContext'

export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState<
        {
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
        }[]
    >([])

    useEffect(() => {
        fetch('https://api.nasa.gov/neo/rest/v1/feed?api_key=nOVahaYE3LLJCXvonb49Lxaw8dHmxBJj8TrJt1gA')
            .then((res) => {
                return res.json()
            })
            .then((responce) => {
                let rawAsteroids: any[] = []
                for (const data in responce.near_earth_objects) {
                    rawAsteroids = rawAsteroids.concat(responce.near_earth_objects[data])
                }
                const asteroids = rawAsteroids.map((item) => {
                    const size = (item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_max) / 2
                    const close = item.close_approach_data[0]
                    return {
                        name: item.name as string,
                        date: close.close_approach_date as string,
                        distance: {
                            kilometers: Math.trunc(close.miss_distance.kilometers) as number,
                            lunar: Math.trunc(close.miss_distance.lunar) as number,
                        },
                        isDangerous: item.is_potentially_hazardous_asteroid as boolean,
                        size: Math.trunc(size) as number,
                        id: item.id as string,
                        destroy: false
                    }
                })
                setAsteroids(asteroids)
            })
    }, [])
    const { onlyDangerous } = useContext(AsteroidsContext)
    return (
        <>
            <Header />
            <div className={styles.content}>
                <div className={styles.listOfAsteroids}>
                    {onlyDangerous
                        ? asteroids.filter((it) => it.isDangerous).map((item) => <AsteroidCard key={item.id} {...item} />)
                        : asteroids.map((item) => <AsteroidCard key={item.id} {...item} />)}
                </div>
            </div>
        </>
    )
}

// const genAsteroids = () => {
//     const months = [
//         "Января",
//         "Февраля",
//         "Марта",
//         "Апреля",
//         "Мая",
//         "Июня",
//         "Июля",
//         "Августа",
//         "Сентября",
//         "Октября",
//         "Ноября",
//         "Декабря",];
//
//     const characters = "ABCDEFGHIJGKLMNOPQRSTYVWXYZ"
//     const result = [];
//
//     for (let i = 0; i < 10; i++) {
//         const name = characters[(
//             Math.random() * 25).toFixed(0)] + characters[(
//             Math.random() * 25).toFixed(0)];
//         const date = `${(
//             Math.random() * characters.length + 1).toFixed(0)} ${months[(
//             Math.random() * 11).toFixed(0)]} 2024`;
//         const size = (
//             Math.random() * 100 + 10).toFixed(0);
//         const distance = (
//             Math.random() * 9000000 + 10).toFixed(0);
//         const isDangerous = Math.random() >= 0.5;
//
//         result.push({name, date, size, distance, isDangerous, id: name});
//     }
//     return result;
// }