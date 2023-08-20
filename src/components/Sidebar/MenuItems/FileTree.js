'use client'

import { useState } from "react";
import { useSelector } from "react-redux";
import styles from './style.module.scss'
import { items } from "../../../data";
import { useNavigate } from "react-router-dom";

function FileTree({ collapsed, setCollapsed }) {
    const [expanded, setExpanded] = useState({});

    const theme = useSelector((state) => state.theme);

    const router = useNavigate();

    const pathname = window.location.pathname;

    const toggleExpanded = (folderName) => {
        console.log(folderName)
        setExpanded(prev => {
            return {
                ...prev,
                [folderName]: !prev[folderName]
            }
        })
    }

    // const [showSubMenu, setShowSubMenu] = useState([]);

    // const subMenuOnMouseEnterHandler = (subMenuId) => {
    //     setShowSubMenu((prev) => {
    //         let arr = [...prev];
    //         arr[subMenuId] = true;
    //         return arr;
    //     });
    // };
    // const subMenuOnMouseLeaveHandler = (subMenuId) => {
    //     setShowSubMenu((prev) => {
    //         let arr = [...prev];
    //         arr[subMenuId] = false;
    //         return arr;
    //     });
    // };

    // function renderListItems(item) {
    //     if (item.items) {
    //         return (
    //             item.items.map((ele) => {
    //                 return (
    //                     <div
    //                         className={styles.tooltip}
    //                         key={item.key} style={{
    //                             display: 'flex', flexDirection: 'column',
    //                             height: '100%', paddingLeft: '1rem',
    //                         }}>
    //                         {item.items.map(renderListItems)}
    //                     </div>
    //                 )
    //             })
    //         )
    //     } else {
    //         return (
    //             <div key={item.key} style={{
    //                 display: 'flex', flexDirection: 'column',
    //                 height: '100%', paddingLeft: '1rem',
    //                 marginTop: '10px'
    //             }}>
    //                 <span>{item.name}</span>
    //             </div>
    //         )
    //     }
    // }

    const handleRedirect = (links) => {
        router(links)
    }

    const handleCollapseRecursive = (item) => {
        setCollapsed(false)
        toggleExpanded(item)
    }


    function renderItem(item) {
        const IsExpand = expanded[item.name];
        if (item.isFolder) {
            return (
                <div
                    style={{ color: pathname === item.link ? '#FF3E5B' : theme === 'light' ? '#000' : '#fff', }}
                    className={styles.menuLists}
                    key={item.key}
                >
                    <div
                        className={styles.menuItemsHead}
                        // onClick={() => collapsed === false ? toggleExpanded(item.name) : null}
                        onClick={() => handleCollapseRecursive(item.name)}
                    >
                        <div
                            className={styles.items}
                            style={{
                                color: IsExpand ? '#FF3E5B' : '',
                                margin: '0', lineHeight: collapsed === false && '2px'
                            }}
                        // onMouseEnter={() => subMenuOnMouseEnterHandler(item.key)}
                        // onMouseLeave={() => subMenuOnMouseLeaveHandler(item.key)}
                        >
                            {
                                item.icon &&
                                <span>{item.icon}</span>
                            }
                            {/* items */}
                            <div
                                style={{
                                    color: IsExpand ? '#FF3E5B' : theme === 'light' ? 'black' : '#f2f2f2',
                                }}
                                onClick={() => handleRedirect(item.link)}
                            >

                                {
                                    collapsed === false &&
                                    (item.name)
                                    // :
                                    // showSubMenu[item.key] &&
                                    // item.items.map(renderListItems)
                                }
                            </div>
                        </div>
                        {/* arrow icons */}
                        {
                            collapsed === false &&
                            <span style={{ transform: IsExpand && 'rotate(180deg)', transition: 'all 0.3s ease-in-out' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M17.842 5.63523C18.0434 5.8241 18.0536 6.14052 17.8648 6.34197L10.3648 14.342C10.2702 14.4428 10.1382 14.5 10 14.5C9.86179 14.5 9.72975 14.4428 9.63523 14.342L2.13523 6.34197C1.94637 6.14052 1.95657 5.8241 2.15803 5.63523C2.35948 5.44637 2.6759 5.45657 2.86477 5.65803L10 13.2689L17.1352 5.65803C17.3241 5.45657 17.6405 5.44637 17.842 5.63523Z"
                                        fill={`${IsExpand ? '#FF3E5B' : theme === "dark" ? '#fff' : '#0B0B0C'}`} />
                                </svg>
                            </span>
                        }
                    </div>
                    {
                        collapsed === false && IsExpand &&
                        <ul style={{ paddingLeft: '1rem' }}>
                            {item.items.map(renderItem)}
                        </ul>
                    }
                </div>
            );
        } else {
            return (
                <div key={item.key} className={styles.menuLists}
                    style={{ color: pathname === item.link ? '#FF3E5B' : theme === 'light' ? '#000' : '#fff', }}
                    onClick={() => setCollapsed(false)}
                >
                    <div
                        className={styles.items}
                        style={{ color: IsExpand ? '#FF3E5B' : '', margin: '0', lineHeight: collapsed === false && '2px' }}
                    // onMouseEnter={() => subMenuOnMouseEnterHandler(item.key)}
                    // onMouseLeave={() => subMenuOnMouseLeaveHandler(item.key)}
                    >
                        {
                            item.icon &&
                            <span

                            >{item.icon}</span>
                        }

                        <div
                            style={{
                                color: IsExpand || pathname === item.link ? '#FF3E5B' : theme === 'light' ? 'black' : '#f2f2f2',
                            }}
                            onClick={() => handleRedirect(item.link)}
                        >
                            {/* {
                                collapsed === false ? (
                                    item.name
                                ) :
                                    showSubMenu[item.key] &&
                                    <div key={item.key}
                                        className={styles.tooltip}
                                        style={{
                                            backgroundColor: theme === 'light' ? 'red' : '#1c1a1a',
                                            borderRightColor: theme === 'light' ? 'red' : '#1c1a1a'
                                        }}
                                    >
                                        <a
                                            href='#sub-menu'
                                            className={styles.submenuLink}
                                            style={{ textDecoration: "none", color: theme === "light" ? 'black' : 'white' }}
                                        >
                                            <span>{item.name}</span>
                                        </a>
                                    </div>
                            } */}
                            {
                                collapsed === false &&
                                item.name
                            }
                        </div>
                    </div>
                </div >
            );
        }
    }

    return (
        <div
            className={styles.menuListContainer}
            style={{ padding: collapsed === false ? '0 24px' : '0 22px', }}
        >
            {items.map(renderItem)}
        </div>
    );

}

export default FileTree;