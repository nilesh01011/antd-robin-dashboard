import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.scss'

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

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useSelector((state) => state.theme);

    let domNode = useClickOutSide(() => {
        setIsOpen(false)
    })

    const items = [
        {
            key: '1',
            label: 'Branch Location',
            children: [
                {
                    key: '2-1',
                    label: 'Gurgaon',
                },
                {
                    key: '2-2',
                    label: 'Lajpat Nagar',
                },
                {
                    key: '2-3',
                    label: 'Noida',
                },
            ],
        },
        {
            key: '2',
            label: 'Financial Year',
        },
    ];

    return (
        <div
            ref={domNode}
            className={styles.dropdown}
        // style={{ backgroundColor: theme === 'light' ? '#000' : '#1C1A1A' }}
        >
            <button onClick={() => setIsOpen(!isOpen)}
                className={styles.dropdownBtn}
                style={{
                    color: theme === 'light' ? '#000' : '#fff',
                    backgroundColor: 'transparent'
                }}>
                Gujarat
                {/* icons */}
                <svg
                    style={{
                        transform: isOpen === true ? 'rotate(180deg)' : '',
                        transition: 'transform 0.3s ease-in-out'
                    }}
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M17.842 5.63523C18.0434 5.8241 18.0536 6.14052 17.8648 6.34197L10.3648 14.342C10.2702 14.4428 10.1382 14.5 10 14.5C9.86179 14.5 9.72975 14.4428 9.63523 14.342L2.13523 6.34197C1.94637 6.14052 1.95657 5.8241 2.15803 5.63523C2.35948 5.44637 2.6759 5.45657 2.86477 5.65803L10 13.2689L17.1352 5.65803C17.3241 5.45657 17.6405 5.44637 17.842 5.63523Z"
                        fill={theme === 'light' ? '#000' : '#fff'} />
                </svg>
            </button>

            {
                isOpen && (
                    <ul
                        style={{ backgroundColor: 'red' }}
                        className={`${styles.dropdownContainer} ${theme === 'dark' ? 'darkTheme' : 'lightTheme'}`}
                    >
                        {/* <li className='text-[12px] text-left p-[6px] px-[10px]'>List 1</li>
                        <li className='text-[12px] text-left p-[6px] px-[10px]'>List 2</li>
                        <li className='text-[12px] text-left p-[6px] px-[10px]'>List 3</li> */}
                        {
                            items.map((ele) => {
                                const { key, label, children } = ele;

                                if (children) {
                                    return (
                                        <li key={key} className={styles.dropdownItems}>
                                            <span>{label}</span>
                                            {/* expands */}

                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={key} className={styles.dropdownItems}>{label}</li>
                                    )
                                }
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Dropdown