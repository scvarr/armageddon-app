import { ReactNode, useState, createContext, FC } from 'react'
import React from 'react'

export const AsteroidsContext = createContext(null as any)

type AsteroidsContextProviderProps = {
    children?: ReactNode
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({ children }) => {
    const [onlyDangerous, setOnlyDangerous] = useState(false)

    const [distanceMode, setDistanceMode] = useState(false)

    const [destroyment, setDestroyment] = useState<any>([])

    const addAsteroid = (asteroid) => {
        setDestroyment([...destroyment.filter(item => item['id'] !== asteroid.id), asteroid])
    }

    const deleteAsteroid = (aster) => {
        setDestroyment(destroyment.filter(item => item['id'] !== aster))
    }
    return (
        <AsteroidsContext.Provider
            value={{
                onlyDangerous,
                setOnlyDangerous,
                distanceMode,
                setDistanceMode,
                addAsteroid,
                deleteAsteroid,
                destroyment,
            }}
        >
            {children}
        </AsteroidsContext.Provider>
    )
}
