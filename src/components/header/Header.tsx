import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.headPage}>
            <div></div>
            <div className={styles.headTitle}>
                <h1>Армагеддон V</h1>
                <div>
                    Сервис мониторинга и уничтожения астероидов, опасно
                    подлетающих к Земле.
                </div>
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
    )
}
