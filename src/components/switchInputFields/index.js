import { Switch } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.scss'

function Index({ size }) {

    const [isChecked, setIsChecked] = useState(true)

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setIsChecked(!isChecked)
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Switch defaultChecked size={size} onChange={onChange} className={styles.switchInput} />
                {
                    isChecked === true ?
                        <span style={{ color: '#70C922' }}>Active</span>
                        :
                        <span style={{ color: '#858585' }}>Inactive</span>
                }
            </div>
        </>
    )
}

export default Index