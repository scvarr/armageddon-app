import styles from "./AsteroidCardContent.module.css";

export const AsteroidCardContent = (props) => {
    const {name, date, distance, size} = props;


    return (
        <div>
            <div>{name}</div>
            <div>
                <div>{`Дата: ${date}`}</div>
                <div>{`Расстояние: ${distance} км`}</div>
                <div>{`Размер: ${size} м`}</div>
            </div>
        </div>)
}