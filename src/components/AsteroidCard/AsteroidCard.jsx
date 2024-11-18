import styles from "./AsteroidCard.module.css";
import {AsteroidCardImage} from "./AsteroidCardImage/AsteroidCardImage";
import {AsteroidCardContent} from "./AsteroidCardContent/AsteroidCardContent";
import {AsteroidCardAction} from "./AsteroidCardAction/AsteroidCardAction";

export const AsteroidCard = (props) =>{
    const {name, date, distance, size, isDangerous} = props;
    return (
        <div className={isDangerous ? styles.cardRed : styles.cardRegular}>
            <div className={styles.card}>
                <AsteroidCardImage/>
                <AsteroidCardContent name={name} date={date} distance={distance} size={size}/>
                <AsteroidCardAction isDangerous={isDangerous}/>
            </div>
        </div>
    )
}