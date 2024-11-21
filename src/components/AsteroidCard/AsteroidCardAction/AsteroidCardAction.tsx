import React, { useContext, useState } from 'react'
import { AsteroidsContext } from '../../asteroids-context/AsteroidsContext'
// import styles from './AsteroidCard.module.css';



export const AsteroidCardAction = (props: {isDangerous: boolean, id: string, addClick: (asteroid: any)=>void}) => {
    const {isDangerous, id, addClick} = props
    const {deleteAsteroid} = useContext(AsteroidsContext)
    const [isDestroy, setIsDestroy] = useState(false)
    function switchButton() {
        deleteAsteroid(id)
        setIsDestroy(true)
    }

    return (
        <div>
            <div>Оценка :</div>
            <div>{`${isDangerous ? 'Опасен' : "Не опасен"}`}</div>

            <button type="button" id="addB" onClick={addClick}>Уничтожить</button>
            <button type="button" id="delB" onClick={() => switchButton()}>Не уничтожать</button>
            <div>{isDestroy ? "Помечен для удаления" : " "}</div>
            {/*<button id='addDelAst' onClick={buttonAction}>*/}
            {/*    {buttonLabel}*/}
            {/*</button>*/}
        </div>)
}
