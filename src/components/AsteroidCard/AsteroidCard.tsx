import {AsteroidCardImage} from "./AsteroidCardImage/AsteroidCardImage";
import {AsteroidCardContent} from "./AsteroidCardContent/AsteroidCardContent";
import {AsteroidCardAction} from "./AsteroidCardAction/AsteroidCardAction";
import styles from './AsteroidCard.module.css';

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    },
    size: number;
    isDangerous: boolean;
    distanceMode: boolean;
    id: string;
}
export const AsteroidCard = (props: AsteroidCardProps) => {
    const {name, date, distance, size, isDangerous, distanceMode} = props;
    return (
        <div className={isDangerous ? styles.cardRed : styles.cardRegular}>
            <div className={styles.card}>
                <AsteroidCardImage/>
                <AsteroidCardContent name={name} date={date} distance={distance} distanceMode={distanceMode}
                                     size={size}/>
                <AsteroidCardAction isDangerous={isDangerous}/>
            </div>
        </div>
    )
}