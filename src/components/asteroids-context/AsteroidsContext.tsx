import { ReactNode, useState, createContext, FC } from 'react'
import React from 'react'

export const AsteroidsContext = createContext({
    onlyDangerous: true,
    setOnlyDangerous: (onlyDangerous) => {},
    distanceMode: true,
    setDistanceMode: (distanceMode: boolean) => {},
})

 type AsteroidsContextProviderProps = {
     children: ReactNode
 }

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps>=({
                                                                              children
}) => {

    const [onlyDangerous, setOnlyDangerous] = useState<boolean>(false)

    const [distanceMode, setDistanceMode] = useState<boolean>(false)
    return (
        <AsteroidsContext.Provider
            value={{
                onlyDangerous,
                setOnlyDangerous,
                distanceMode,
                setDistanceMode,
            }}>
            {children}
        </AsteroidsContext.Provider>
    )
}
