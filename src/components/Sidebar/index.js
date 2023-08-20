import React, { useState } from 'react'
import styles from './styles/styles.module.scss'
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlices';
import { B_DARK_THEME, B_LIGHT_THEME, ROBIN_DARK_THEME, ROBIN_LIGHT_THEME, sideBarHeaderArrow } from '../../assets';
import FileTree from './MenuItems/FileTree';
import SearchInput from '../searchInput';
import MenuItems from './MenuItems/MenuItems';
// import SearchInput from './SearchInput';
const { Sider } = Layout;

function Index() {
    const [collapsed, setCollapsed] = useState(true);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const handleThemeChange = (theme) => {
        dispatch(toggleTheme(theme))
    }

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // search inputs
    const onSearch = (searchQuery) => {
        console.log(searchQuery)
    }
    const searchIcons = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.69565 2C4.99775 2 2 4.99775 2 8.69565C2 12.3936 4.99775 15.3913 8.69565 15.3913C10.3646 15.3913 11.891 14.7807 13.0635 13.7706L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L13.7706 13.0635C14.7807 11.891 15.3913 10.3646 15.3913 8.69565C15.3913 4.99775 12.3936 2 8.69565 2ZM3 8.69565C3 5.55003 5.55003 3 8.69565 3C11.8413 3 14.3913 5.55003 14.3913 8.69565C14.3913 11.8413 11.8413 14.3913 8.69565 14.3913C5.55003 14.3913 3 11.8413 3 8.69565Z" fill="#FF3E5B" />
    </svg>

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            className={styles.sidebar}
            collapsedWidth={60}
            width={282}
            trigger={null}
            style={{ background: theme === 'light' ? 'white' : '#242424', }}
        >
            {/* toggle button */}
            <div onClick={toggleCollapsed} className={styles.sidebarHeader}
                style={{ backgroundColor: theme === 'light' ? 'white' : '#242424', padding: collapsed === false ? '24px' : '24px 14px' }}
            >
                {/* images */}
                {
                    collapsed === false ?
                        <img src={theme === 'light' ? ROBIN_LIGHT_THEME : ROBIN_DARK_THEME} alt='logo' height={26} />
                        :
                        <img src={theme === 'light' ? B_LIGHT_THEME : B_DARK_THEME} alt='logo' height={26} />
                }
                {/* icons */}
                <img src={sideBarHeaderArrow}
                    className={collapsed === false ? styles.iconRotate : ''}
                    alt='arrow-icons' height={26} />
            </div>

            {/* search inputs */}
            <div style={{ padding: collapsed === false ? '0 24px' : '0 18px', marginTop: '14px', marginBottom: '10px' }}>
                {
                    collapsed === false &&
                    <SearchInput onSearch={onSearch} icons={searchIcons} placeholder='Search menu...' />
                }
                {
                    collapsed === true &&
                    <span onClick={() => setCollapsed(false)} style={{ color: theme === 'light' ? 'black' : 'white', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.69565 2C4.99775 2 2 4.99775 2 8.69565C2 12.3936 4.99775 15.3913 8.69565 15.3913C10.3646 15.3913 11.891 14.7807 13.0635 13.7706L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L13.7706 13.0635C14.7807 11.891 15.3913 10.3646 15.3913 8.69565C15.3913 4.99775 12.3936 2 8.69565 2ZM3 8.69565C3 5.55003 5.55003 3 8.69565 3C11.8413 3 14.3913 5.55003 14.3913 8.69565C14.3913 11.8413 11.8413 14.3913 8.69565 14.3913C5.55003 14.3913 3 11.8413 3 8.69565Z"
                                fill="currentColor" />
                        </svg>
                    </span>
                }
            </div>

            {/* menu items */}
            <FileTree collapsed={collapsed} setCollapsed={setCollapsed} />
            {/* <MenuItems collapsed={collapsed} setCollapsed={setCollapsed} /> */}

            {/* theme changed */}
            <div className={styles.themeContainer}
                style={{
                    padding: collapsed === true ? '7px 10px' : '10px 16px',
                    backgroundColor: theme === "light" ? '#F2F2F2' : '#1c1a1a'
                }}>

                <div
                    className={styles.themeWrapper}
                    style={{ border: `1px solid ${theme === "dark" ? '#545454' : '#E6E6E6'}` }}>
                    {
                        collapsed === true ? (
                            <>
                                {
                                    theme === "dark" ? (
                                        <div className={styles.themeBtn}
                                            onClick={() => handleThemeChange('dark')}
                                            style={{
                                                backgroundColor: theme === "light" ? '#F2F2F2' : '',
                                            }}
                                        >
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z" fill={`${theme === "dark" ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className={styles.themeBtn}
                                            onClick={() => handleThemeChange('light')}
                                            style={{ backgroundColor: theme === "light" ? '#F2F2F2' : '#0B0B0C', cursor: 'pointer', width: '100%', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z" fill={`${theme === 'light' ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                            </svg>
                                        </div>
                                    )
                                }
                            </>
                        ) : (
                            <>
                                <button className={styles.themeCollapsedBtn}
                                    onClick={() => handleThemeChange('light')}
                                    type='button'
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: theme === 'light' ? '#FF3E5B' : '#fff',
                                        border: `1px solid ${theme === "light" ? '#FF3E5B' : 'transparent'}`
                                    }}>
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z" fill={`${theme === 'light' ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                        </svg>
                                    </span>
                                    Light Mode
                                </button>
                                <button className={styles.themeCollapsedBtn}
                                    onClick={() => handleThemeChange('dark')}
                                    type='button'
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: theme === 'dark' ? '#FF3E5B' : 'black',
                                        border: `1px solid ${theme === "dark" ? '#FF3E5B' : 'transparent'}`
                                    }}>
                                    <span>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z" fill={`${theme === "dark" ? '#FF3E5B' : `${theme === "dark" ? 'white' : 'black'}`}`} />
                                        </svg>
                                    </span>
                                    Dark Mode
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </Sider>
    );
};

export default Index;
