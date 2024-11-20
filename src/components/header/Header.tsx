import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { AsteroidsContext } from '../asteroids-context/AsteroidsContext'

export const Header = () => {
    const { onlyDangerous, setOnlyDangerous, setDistanceMode } = useContext(AsteroidsContext)
    return (
        <div className={styles.header}>
            <div className={styles.headPage}>
                <div></div>
                <div className={styles.headTitle}>
                    <h1>Армагеддон V</h1>
                    <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
                </div>
                <div className={styles.asteroidsLink}>
                    <Link to={'/Asteroids'} className={styles.defLinkText}>
                        Астероиды
                    </Link>
                </div>
                <div className={styles.destroymentLink}>
                    <Link to={'/Destroyment'} className={styles.defLinkText}>
                        Уничтожение
                    </Link>
                </div>
            </div>
            <div className={styles.topChoices}>
                <div className={styles.showDangerousOnly} onClick={() => setOnlyDangerous(!onlyDangerous)}>
                    <input type={'checkbox'} value={onlyDangerous as unknown as string} />
                    Показать только опасные
                </div>
                <div className={styles.distanceMode}>
                    Расстояние{' '}
                    <button className={styles.distanceChooser} onClick={() => setDistanceMode(true)}>
                        в километрах,
                    </button>
                    <button className={styles.distanceChooser} onClick={() => setDistanceMode(false)}>
                        {' '}
                        в дистанциях до луны
                    </button>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.topBorder}></div>
            <div className={styles.gap}></div>
        </div>
    )
}
