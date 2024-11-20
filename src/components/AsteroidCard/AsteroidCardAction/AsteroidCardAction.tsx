import React, { useContext, useState } from 'react'
import { AsteroidCard } from '../AsteroidCard'
import { AsteroidsContext } from '../../asteroids-context/AsteroidsContext'
// import styles from './AsteroidCard.module.css';
import { Destroyment } from '../../../pages/Destroyment'


export const AsteroidCardAction = (props: {isDangerous: boolean, id: string, addClick: (asteroid: any)=>void}) => {
    const {isDangerous, id, addClick} = props
    const {destroyment, deleteAsteroid} = useContext(AsteroidsContext)
    const [disabled, setDisabled] = useState(false)

    return (
        <div>
            <div>Оценка :</div>
            <div>{`${isDangerous ? 'Опасен' : "Не опасен"}`}</div>

            <button type="button" onClick={addClick}>Уничтожить</button>
            <button type="button" disabled={disabled} onClick={() => deleteAsteroid(id)}>Не уничтожать</button>
            {/*<button id='addDelAst' onClick={buttonAction}>*/}
            {/*    {buttonLabel}*/}
            {/*</button>*/}
        </div>)
}
