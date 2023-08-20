import React from 'react'
import { Input } from 'antd';
import styles from './styles.module.scss'
import { useSelector } from 'react-redux';

function Index({ placeholder, setInputValue }) {
    const theme = useSelector((state) => state.theme);
    return (
        <Input placeholder={placeholder} className={styles.inputFields}
            style={{
                border: `1px solid ${theme === "light" ? '#B5B5B6' : '#635d5d'}`,
                background: 'transparent',
                color: theme === "light" ? 'black' : 'white'
            }}
            onChange={(e) => setInputValue(e.target.value)}
        />
    )
}

export default Index