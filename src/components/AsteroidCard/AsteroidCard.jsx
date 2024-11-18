import styles from "./AsteroidCard.module.css";
import {AsteroidCardImage} from "./AsteroidCardImage/AsteroidCardImage";
import {AsteroidCardContent} from "./AsteroidCardContent/AsteroidCardContent";
import {AsteroidCardAction} from "./AsteroidCardAction/AsteroidCardAction";

export const AsteroidCard = () =>{
    return (
        <div className={styles.cardRegular}>
            <div className={styles.card}>
                <AsteroidCardImage/>
                <AsteroidCardContent name={"First"} date={"18 ноября 2024 года"} distance={126332} size={10}/>
                <AsteroidCardAction/>
            </div>
        </div>
    )
}

export const DangerAsteroidCard = () =>{
    return (
        <div className={styles.cardRed}>
            <div className={styles.card}>
                <AsteroidCardImage/>
                <AsteroidCardContent name={"First"} date={"18 ноября 2024 года"} distance={126332} size={10}/>
                <AsteroidCardAction/>
            </div>
        </div>
    )
}