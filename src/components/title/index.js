import React from 'react'
import styles from './styles.module.scss'

function Index({ title }) {
    return (
        <h1 className={styles.heading}>
            {title}
            <span></span>
        </h1>
    )
}

export default Index