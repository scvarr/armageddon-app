import styles from "./AsteroidCardContent.module.css";

export const AsteroidCardContent = (props) => {
    const {name, date, distance, size, distanceMode} = props;


    return (
        <div>
            <div className={styles.contentName}>{name}</div>
            <div className={styles.contetWrapper}>
                <div className={styles.contentData}>{`Дата: ${date}`}</div>
                <div className={styles.contentDistance}>{distanceMode ? `Расстояние: ${distance.kilometers} км` : `Расстояние: ${distance.lunar} расстояний до луны`}</div>
                <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
            </div>
        </div>)
}