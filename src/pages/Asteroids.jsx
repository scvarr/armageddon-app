import {Header} from "../components/header/Header";
import styles from "./Asteroids.module.css"
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";
import {useState} from "react";

export const Asteroids = ()=> {

    const [asteroids] = useState(genAsteroids());

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    return (
        <div className={styles.markup}>
            <div className={styles.margin}></div>
            <div className={styles.content}>
                <Header/>
                <div className={styles.gap}></div>
                <div className={styles.topBorder}></div>
                <div className={styles.topChoices}>
                    <div>
                        <div className={styles.showDangerousOnly} onClick={() => setOnlyDangerous(!onlyDangerous)}>
                            <input type={"checkbox"} value={onlyDangerous}></input>
                            Показать только опасные
                        </div>
                    </div>
                    <div className={styles.distanceMode}>
                        Расстояние <button className={styles.distanceChooser}>в километрах</button>,
                        <button className={styles.distanceChooser}> в дистанциях до луны</button>
                    </div>
                </div>
                {onlyDangerous ?
                    asteroids.filter((item)=>item.isDangerous).map((item) => <AsteroidCard {...item} />) :
                    asteroids.map((item) => <AsteroidCard {...item} />)
                }
            </div>
        </div>
    )
}

const genAsteroids = () => {
    const months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",];

    const characters = "ABCDEFGHIJGKLMNOPQRSTYVWXYZ"
    const result = [];

    for (let i = 0; i < 10; i++) {
        const name = characters[(Math.random() * 25).toFixed(0)] + characters[(Math.random() * 25).toFixed(0)];
        const date = `${(Math.random()*characters.length+1).toFixed(0)} ${months[(Math.random()*11).toFixed(0)]} 2024`;
        const size = (Math.random()*100+10).toFixed(0);
        const distance = (Math.random()*9000000+10).toFixed(0);
        const isDangerous = Math.random()>=0.5;
        result.push({name, date, size, distance, isDangerous});
    }
    return result;
}