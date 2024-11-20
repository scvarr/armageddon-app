import styles from './AsteroidCard.module.css';

export const AsteroidCardAction = ({isDangerous}) => {
    return (
        <div>
            <div>Оценка:</div>
            <div>{`${isDangerous ? 'Опасен' : "Не опасен"}`}</div>
            <button>
                <div>На уничтожение</div>
            </button>
        </div>)
}