import {Header} from "../components/header/Header";
import styles from "./Asteroids.module.css"
import {AsteroidCard, DangerAsteroidCard} from "../components/AsteroidCard/AsteroidCard";

export const Asteroids = ()=> {

    const asteroids = [{name: "first", isDangerous: true}, {name: "second", isDangerous: false}]

    return (
        <div className={styles.markup}>
            <div className={styles.margin}></div>
            <div className={styles.content}>
                <Header/>
                <div className={styles.gap}></div>
                <div className={styles.topBorder}></div>
                <div className={styles.topChoices}>
                    <div>
                        <div className={styles.showDangerousOnly}>
                            <input type={"checkbox"} value={asteroids.showMode}></input>
                            Показать только опасные
                        </div>
                    </div>
                    <div className={styles.distanceMode}>
                        Расстояние <button className={styles.distanceChooser}>в километрах</button>,
                        <button className={styles.distanceChooser}> в дистанциях до луны</button>
                    </div>
                </div>
                <div className={styles.gap}></div>
                <DangerAsteroidCard/>
                <div className={styles.gap}></div>
                <AsteroidCard/>
            </div>
            <div className={styles.margin}></div>
        </div>
    )
}