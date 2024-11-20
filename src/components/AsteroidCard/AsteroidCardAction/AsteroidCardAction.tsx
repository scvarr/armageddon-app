import React from 'react'
// import styles from './AsteroidCard.module.css';

export const AsteroidCardAction = (props: {isDangerous: boolean, onClick: (asteroid: any)=>void}) => {
    const {isDangerous, onClick} = props
    return (
        <div>
            <div>Оценка :</div>
            <div>{`${isDangerous ? 'Опасен' : "Не опасен"}`}</div>
            <button onClick={onClick}>
                <div>На уничтожение</div>
            </button>
        </div>)
}