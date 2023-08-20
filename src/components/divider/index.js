import React from 'react'
import { useSelector } from 'react-redux';

function Index() {
    const theme = useSelector((state) => state.theme);
    return (
        <div style={{ width: '100%', height: '1px', margin: '1rem 0', background: theme === "light" ? '#E6E6E6' : '#635d5d' }}></div>
    )
}

export default Index