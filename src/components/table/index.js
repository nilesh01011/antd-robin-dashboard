import React from 'react';
import styles from './styles.module.scss'
import { useSelector } from 'react-redux';
import { Space } from 'antd';


const eyeIcons = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.37757 2.36505C3.76699 1.21336 5.75481 0 8 0C10.2452 0 12.233 1.21336 13.6224 2.36505C14.3242 2.94678 14.8909 3.52735 15.2824 3.96248C15.4784 4.18037 15.6312 4.36263 15.7358 4.49148C15.7881 4.55593 15.8285 4.60708 15.8561 4.64272C15.87 4.66054 15.8807 4.67449 15.8881 4.6843L15.8969 4.69585L15.8994 4.69924L15.9005 4.7007C15.9005 4.7007 15.9007 4.70099 15.5 5C15.9007 5.29902 15.9005 5.2993 15.9005 5.2993L15.9002 5.29969L15.8994 5.30077L15.8969 5.30415L15.8881 5.31571C15.8807 5.32551 15.87 5.33946 15.8561 5.35728C15.8285 5.39292 15.7881 5.44407 15.7358 5.50852C15.6312 5.63737 15.4784 5.81964 15.2824 6.03752C14.8909 6.47265 14.3242 7.05323 13.6224 7.63495C12.233 8.78664 10.2452 10 8 10C5.75481 10 3.76699 8.78664 2.37757 7.63495C1.67577 7.05323 1.10908 6.47265 0.717647 6.03752C0.521641 5.81964 0.368817 5.63737 0.264201 5.50852C0.211875 5.44407 0.171554 5.39292 0.143867 5.35728C0.130022 5.33946 0.119331 5.32551 0.111872 5.31571L0.103116 5.30415L0.100573 5.30077L0.0997641 5.29969L0.0994753 5.2993C0.0994753 5.2993 0.0992638 5.29902 0.5 5C0.0992638 4.70099 0.0994753 4.7007 0.0994753 4.7007L0.100573 4.69924L0.103116 4.69585L0.111872 4.6843C0.119331 4.67449 0.130022 4.66054 0.143867 4.64272C0.171554 4.60708 0.211875 4.55593 0.264201 4.49148C0.368817 4.36263 0.521641 4.18037 0.717647 3.96248C1.10908 3.52735 1.67577 2.94678 2.37757 2.36505ZM0.5 5L0.0992639 4.70099C-0.033088 4.87836 -0.033088 5.12164 0.0992639 5.29902L0.5 5ZM1.14093 5C1.22648 5.10234 1.33376 5.22718 1.4611 5.36873C1.82869 5.77735 2.36032 6.32178 3.01574 6.86505C4.34076 7.96336 6.10294 9 8 9C9.89706 9 11.6592 7.96336 12.9843 6.86505C13.6397 6.32178 14.1713 5.77735 14.5389 5.36873C14.6662 5.22718 14.7735 5.10234 14.8591 5C14.7735 4.89766 14.6662 4.77282 14.5389 4.63127C14.1713 4.22265 13.6397 3.67823 12.9843 3.13495C11.6592 2.03664 9.89706 1 8 1C6.10294 1 4.34076 2.03664 3.01574 3.13495C2.36032 3.67823 1.82869 4.22265 1.4611 4.63127C1.33376 4.77282 1.22648 4.89766 1.14093 5ZM15.5 5L15.9007 5.29902C16.0331 5.12164 16.0331 4.87836 15.9007 4.70099L15.5 5ZM6.32062 3.32062C6.76602 2.87522 7.37011 2.625 8 2.625C8.62989 2.625 9.23398 2.87522 9.67938 3.32062C10.1248 3.76602 10.375 4.37011 10.375 5C10.375 5.62989 10.1248 6.23398 9.67938 6.67938C9.23398 7.12478 8.62989 7.375 8 7.375C7.37011 7.375 6.76602 7.12478 6.32062 6.67938C5.87522 6.23398 5.625 5.62989 5.625 5C5.625 4.37011 5.87522 3.76602 6.32062 3.32062ZM8 3.625C7.63533 3.625 7.28559 3.76987 7.02773 4.02773C6.76987 4.28559 6.625 4.63533 6.625 5C6.625 5.36467 6.76987 5.71441 7.02773 5.97227C7.28559 6.23014 7.63533 6.375 8 6.375C8.36468 6.375 8.71441 6.23014 8.97228 5.97227C9.23014 5.71441 9.375 5.36467 9.375 5C9.375 4.63533 9.23014 4.28559 8.97228 4.02773C8.71441 3.76987 8.36468 3.625 8 3.625Z" fill="#FF3E5B" />
</svg>

const editIcons = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.6711 1.16368L6.82705 8.12519L6.66577 9.66037L8.11733 9.26936L14.6823 2.59169C14.6929 2.5809 14.704 2.57059 14.7156 2.56081C14.8405 2.45489 14.9587 2.23838 14.9915 1.96346C15.0237 1.6934 14.9643 1.44173 14.8333 1.2704C14.7135 1.11376 14.5112 1.01572 14.2654 1.00165C14.0231 0.987782 13.8027 1.06016 13.6711 1.16368ZM14.3226 0.00328464C14.7899 0.0300335 15.2926 0.224788 15.6277 0.662988C15.9515 1.08651 16.04 1.61606 15.9845 2.08179C15.9305 2.53454 15.7317 2.99982 15.3811 3.30729L8.73515 10.0673C8.67277 10.1308 8.59458 10.1764 8.50865 10.1996L6.22244 10.8154C6.06333 10.8583 5.89331 10.82 5.76793 10.7131C5.64255 10.6061 5.57791 10.4443 5.59513 10.2804L5.85077 7.84699C5.86259 7.7345 5.91219 7.62935 5.99149 7.5487L12.9766 0.443653C12.9872 0.432861 12.9983 0.422556 13.0099 0.412771C13.3677 0.109502 13.861 -0.0231349 14.3226 0.00328464ZM0 1.28989C0 1.01374 0.223858 0.789886 0.5 0.789886H7.84439C8.12053 0.789886 8.34439 1.01374 8.34439 1.28989C8.34439 1.56603 8.12053 1.78989 7.84439 1.78989H1V15H13.9703V8.06826C13.9703 7.79212 14.1942 7.56826 14.4703 7.56826C14.7464 7.56826 14.9703 7.79212 14.9703 8.06826V15.5C14.9703 15.7761 14.7464 16 14.4703 16H0.5C0.223858 16 0 15.7761 0 15.5V1.28989Z" fill="#FF3E5B" />
</svg>


function Index({ tableHead, tableData, emptyData }) {
    const theme = useSelector((state) => state.theme);

    const handleDrawer = (key, type) => {
        console.log(key, type)
    }

    console.log(tableData)

    return (
        <>
            <div id='overFlowNone'
                className={`${!tableData ? styles.tableEmpty : styles.tableData}`}
                style={{
                    border: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`,
                    overflow: !tableData ? '' : 'scroll'
                }}
            >
                <table
                    cellSpacing="0" cellPadding="0"
                >
                    <thead>
                        <tr
                            style={{ backgroundColor: theme === "dark" ? '#545454' : '#f2f2f2' }}
                        >
                            {
                                tableHead && tableHead.map((ele) => {
                                    return (
                                        <th key={ele.key} className={styles.tableHead}>{ele.label}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>

                    {/* tbody */}
                    <tbody style={{
                        backgroundColor: theme === "light" ? '' : '#242424',
                    }}>

                        {
                            tableData && tableData.map((ele) => {
                                const { key, tdOne, tdTwo, tdThree, tdFour, isActiveTags } = ele;

                                const tags = isActiveTags && isActiveTags.map((t) => t);

                                // console.log(tags[1])

                                return (
                                    <tr key={key} className={styles.tableRowData}>
                                        <td
                                            style={{
                                                borderBottom: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`
                                            }}
                                        >
                                            {tdOne}
                                        </td>
                                        <td
                                            style={{
                                                borderBottom: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`
                                            }}
                                        >{tdTwo}</td>
                                        <td
                                            style={{
                                                borderBottom: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`
                                            }}
                                        >{tdThree}</td>
                                        <td
                                            style={{
                                                borderBottom: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`
                                            }}
                                        >
                                            {
                                                isActiveTags && tags ?
                                                    <span className={`${tdFour === 'Active' ? styles.statusGreen : styles.statusDanger}`}>{tdFour}</span>
                                                    :
                                                    tdFour
                                            }
                                        </td>
                                        <td
                                            style={{
                                                borderBottom: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`
                                            }}
                                        >
                                            {
                                                isActiveTags && tags ?
                                                    <span className={`${ele.tdFive === 'Active' ? styles.statusGreen : styles.statusDanger}`}>{tdFour}</span>
                                                    :
                                                    ele.tdFive
                                            }
                                        </td>
                                        {
                                            ele.tdSix &&
                                            <td
                                                style={{
                                                    borderBottom: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`
                                                }}
                                            >{ele.tdSix}</td>
                                        }
                                        <td
                                            style={{
                                                borderBottom: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`
                                            }}
                                            className={styles.actions}
                                        >
                                            <Space size="middle">
                                                <span onClick={() => handleDrawer(key, 'view')}>{eyeIcons}</span>
                                                <span onClick={() => handleDrawer(key, 'edit')}>{editIcons}</span>
                                            </Space>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {
                    !tableData &&
                    emptyData
                }
            </div>
        </>
    )
}
export default Index;