import { ReactNode, useState, createContext, FC } from 'react'
import React from 'react'

// type OnlyDangerousContextType = {
//     onlyDangerous: boolean | null
//     setOnlyDangerous: React.Dispatch<React.SetStateAction<boolean | null>>
// }
//
// const iOnlyDangerousContextState = {
//     onlyDangerous: null,
//     setOnlyDangerous: ()=>{}
// }
//
// export const OnlyDangerousContext = createContext<OnlyDangerousContextType>(iOnlyDangerousContextState)
//
// export const OnlyDangerous
export const AsteroidsContext = createContext(null as any)

type AsteroidsContextProviderProps = {
    children?: ReactNode
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({ children }) => {
    const [onlyDangerous, setOnlyDangerous] = useState(false)
    const [distanceMode, setDistanceMode] = useState(false)

    return <AsteroidsContext.Provider value={{ onlyDangerous, setOnlyDangerous, distanceMode, setDistanceMode }}>{children}</AsteroidsContext.Provider>
}
