import React, { useContext } from 'react'
import { AsteroidCard } from '../AsteroidCard'
import { AsteroidsContext } from '../../asteroids-context/AsteroidsContext'

export const AsteroidsCardContentContainer =(props) =>{
    const { distanceMode } = useContext(AsteroidsContext)
    return <AsteroidCard {...props} distanceMode={distanceMode} />;
}