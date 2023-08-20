import React from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { Input } from 'antd'

function SearchInput({ placeholder, icons, onSearch }) {

    const theme = useSelector((state) => state.theme);

    return (
        <>
            <Input.Search
                placeholder={placeholder}
                onSearch={(e) => onSearch(e)}
                enterButton={icons}
                className={`${styles.SearchInput} ${theme === 'dark' ? styles.DarkSearchInput : styles.LightSearchInput}`}
            />
        </>
    )
}

export default SearchInput