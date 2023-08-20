import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

let useClickOutSide = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        const handlerEvent = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handlerEvent);

        return () => {
            document.removeEventListener("mousedown", handlerEvent)
        }
    }, [handler]);

    return domNode
}

function Popups() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useSelector((state) => state.theme);
    let domNode = useClickOutSide(() => {
        setIsOpen(false)
    })
    return (
        <>
            <div ref={domNode} className={styles.notification}>
                {/* notification button */}
                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                        fill="none"><path fillRule="evenodd" clipRule="evenodd"
                            d="M9.25222 2.09071C9.42805 1.25428 10.1472 0.600098 11.0486 0.600098C11.9607 0.600098 12.6863 1.26995 12.8511 2.12066C15.7298 2.98796 17.8114 5.75089 17.8114 8.98819V13.6356C17.8114 13.9643 17.9369 14.2743 18.1523 14.4988L21.132 17.6051C21.6771 18.1734 21.3447 19.2334 20.4529 19.2334H13.7035C13.4213 20.461 12.3575 21.4001 11.0486 21.4001H10.7517C9.44286 21.4001 8.37905 20.461 8.09684 19.2334H1.54797C0.656167 19.2334 0.323775 18.1734 0.868944 17.6051L3.84863 14.4988C4.06399 14.2743 4.18949 13.9643 4.18949 13.6356V8.98819C4.18949 5.71264 6.32058 2.92274 9.25222 2.09071ZM11.0005 3.1387C7.97485 3.17992 5.48949 5.75803 5.48949 8.98819V13.6356C5.48949 14.292 5.23961 14.9267 4.78678 15.3988L2.35538 17.9334H19.6455L17.2141 15.3988C16.7613 14.9267 16.5114 14.292 16.5114 13.6356V8.98819C16.5114 5.75803 14.0261 3.17992 11.0005 3.1387ZM9.45992 19.2334C9.69291 19.7543 10.1961 20.1001 10.7517 20.1001H11.0486C11.6042 20.1001 12.1074 19.7543 12.3404 19.2334H9.45992Z" fill="currentColor"></path>
                    </svg>
                    {
                        isOpen === false &&
                        <small className={styles.notificationContainerCount}>
                            1
                        </small>
                    }
                </div>

                {
                    isOpen === true &&
                    <div className={styles.notificationContainer}
                        style={{
                            backgroundColor: theme === 'light' ? '#ffffff' : '#232324',
                            color: theme === 'light' ? '#000000' : '#ffffff',
                            border: `1px solid ${theme === 'light' ? '#E6E6E6' : '#545454'}`
                        }}
                    >
                        {/* heading */}
                        <div className={styles.notificationHead}>
                            <b>Notifications</b>
                            <span>View all</span>
                        </div>
                        {/* divided */}
                        <div style={{
                            width: '100%', height: '1px',
                            background: theme === "light" ? '#DEDEDE' : '#545454', margin: '10px 0'
                        }}></div>
                        {/* notification body */}
                        <span className={styles.arrowIcons}>
                            <svg style={{
                                color: theme === 'light' ? '#f2f2f2' : '#545454',
                            }}
                                width="20" height="9" viewBox="0 0 20 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg"><path
                                    d="M9.75947 1.21387L1.68115 8.15796H17.9152L9.75947 1.21387Z"
                                    fill="currentColor"
                                    stroke="currentColor"></path>
                            </svg>
                        </span>
                        <div className={styles.notificationBody}>
                            <b style={{ fontSize: '12px' }}>Smart Alert from ProMech!</b>
                            <p style={{ fontSize: '12px', marginTop: '5px' }}>
                                Stock up your inventory with Brake Pad Kit (Part No:0603BAB0080KT)
                                for XUV700 model as five customers have been alerted with brake pad
                                replacement request and they are likely to send their vehicle for
                                service in the coming week.
                            </p>
                            <p style={{ marginBottom: '0', color: '#FF3E5B', textDecoration: 'underline', fontSize: '12px' }}>View More</p>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default Popups