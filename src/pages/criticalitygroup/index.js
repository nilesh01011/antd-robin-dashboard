import React, { useState } from 'react'
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import Title from '../../components/title'
import { Col, Row, Space } from 'antd';
import SearchInput from '../../components/searchInput';
import Table from '../../components/table'
import Drawer from './drawer'

function CriticalityGroup() {
    const theme = useSelector((state) => state.theme);
    // search inputs
    const onSearch = (searchQuery) => {
        console.log(searchQuery)
    }
    const searchIcons = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.69565 2C4.99775 2 2 4.99775 2 8.69565C2 12.3936 4.99775 15.3913 8.69565 15.3913C10.3646 15.3913 11.891 14.7807 13.0635 13.7706L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L13.7706 13.0635C14.7807 11.891 15.3913 10.3646 15.3913 8.69565C15.3913 4.99775 12.3936 2 8.69565 2ZM3 8.69565C3 5.55003 5.55003 3 8.69565 3C11.8413 3 14.3913 5.55003 14.3913 8.69565C14.3913 11.8413 11.8413 14.3913 8.69565 14.3913C5.55003 14.3913 3 11.8413 3 8.69565Z" fill="#FF3E5B" />
    </svg>

    const tableHead = [
        {
            key: '1',
            label: '#'
        },
        {
            key: '2',
            label: 'Criticality Group ID '
        },
        {
            key: '3',
            label: 'Criticality Group Name'
        },
        {
            key: '4',
            label: 'Default Group'
        },
        {
            key: '5',
            label: 'Status'
        },
        {
            key: '6',
            label: 'Action'
        }
    ]

    const tableData = [
        {
            key: "1",
            tdOne: '1',
            tdTwo: 'CMN000001',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        },
        {
            key: "2",
            tdOne: '2',
            tdTwo: 'CMN000002',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        },
        {
            key: "3",
            tdOne: '3',
            tdTwo: 'CMN000003',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        },
        {
            key: "4",
            tdOne: '4',
            tdTwo: 'CMN000004',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        },
        {
            key: "5",
            tdOne: '5',
            tdTwo: 'CMN000005',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        },
        {
            key: "6",
            tdOne: '6',
            tdTwo: 'CMN000006',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        },
        {
            key: "7",
            tdOne: '7',
            tdTwo: 'CMN000007',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        },
        {
            key: "8",
            tdOne: '8',
            tdTwo: 'CMN000008',
            tdThree: 'Common Group',
            tdFour: 'Active',
            tdFive: 'Active',
            isActiveTags: ['4', '5']
        }
    ];

    const [open, setOpen] = useState(false);

    const handleCriticalGroupDetails = () => {
        console.log('Critical')
        setOpen(true)
    }

    const emptyData = (
        <div className={styles.emptyTableData} style={{
            backgroundColor: theme === "light" ? '' : '#242424',
            width: '100%'
        }}>
            {/* images */}
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="58" viewBox="0 0 71 58" fill="none">
                    <path d="M68.8334 29H48.8334L42.1667 39H28.8334L22.1667 29H2.16675" stroke="#B5B5B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.6667 6.03325L2.16675 28.9999V48.9999C2.16675 50.768 2.86913 52.4637 4.11937 53.714C5.36961 54.9642 7.0653 55.6666 8.83342 55.6666H62.1668C63.9349 55.6666 65.6306 54.9642 66.8808 53.714C68.131 52.4637 68.8334 50.768 68.8334 48.9999V28.9999L57.3334 6.03325C56.7815 4.92254 55.9307 3.98782 54.8766 3.33418C53.8225 2.68055 52.607 2.33391 51.3668 2.33325H19.6334C18.3931 2.33391 17.1776 2.68055 16.1236 3.33418C15.0695 3.98782 14.2187 4.92254 13.6667 6.03325V6.03325Z" stroke="#B5B5B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            {/* text */}
            <p>
                <span>Please “Add Group Details”</span>
                <span>using below button</span>
            </p>
            {/* buttons */}
            <button type='button' aria-label='add' onClick={() => handleCriticalGroupDetails()}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.75C7.68122 1.75 7.82813 1.89691 7.82813 2.07812V6.67188H12.4219C12.6031 6.67188 12.75 6.81878 12.75 7C12.75 7.18122 12.6031 7.32813 12.4219 7.32813H7.82813V11.9219C7.82813 12.1031 7.68122 12.25 7.5 12.25C7.31878 12.25 7.17188 12.1031 7.17188 11.9219L7.17188 7.32813H2.57812C2.39691 7.32813 2.25 7.18122 2.25 7C2.25 6.81878 2.39691 6.67188 2.57812 6.67188H7.17188L7.17188 2.07812C7.17188 1.89691 7.31878 1.75 7.5 1.75Z" fill="white" />
                    </svg>
                </span>
                Add
            </button>
        </div>
    )

    return (
        <div
            className={styles.criticallygroup}
            style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 13 }}>
            {/* header */}
            <div
                style={{ borderBottom: `1px solid ${theme === 'light' ? '#DEDEDE' : '#635D5D'}` }}
            >
                <Title title="Application Criticality Group Master" />
            </div>
            <Space size={20} direction="vertical" style={{ width: '100%', }}>
                {/* filter header */}
                <Row style={{ backgroundColor: theme === 'light' ? '#f2f2f2' : '#242424', padding: '14px 20px', marginTop: '25px', borderRadius: '4px', border: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}` }}>
                    <Col>
                        <Space size={15}>
                            {/* title */}
                            <h4 style={{ marginBottom: '0' }}>Criticality Group List</h4>
                            {/* search inputs */}
                            <SearchInput onSearch={onSearch} icons={searchIcons} placeholder='Search menu filters...' />
                            {/* advanced filter button */}
                            <Space size={8} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 8.89575C11.9084 8.89575 12.1042 9.09163 12.1042 9.33325V12.2499C12.1042 12.4915 11.9084 12.6874 11.6667 12.6874C11.4251 12.6874 11.2292 12.4915 11.2292 12.2499V9.33325C11.2292 9.09163 11.4251 8.89575 11.6667 8.89575Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.47925 9.33325C9.47925 9.09163 9.67512 8.89575 9.91675 8.89575H13.4167C13.6584 8.89575 13.8542 9.09163 13.8542 9.33325C13.8542 9.57488 13.6584 9.77075 13.4167 9.77075H9.91675C9.67512 9.77075 9.47925 9.57488 9.47925 9.33325Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.33325 7.72925C2.57488 7.72925 2.77075 7.92512 2.77075 8.16675V12.2501C2.77075 12.4917 2.57488 12.6876 2.33325 12.6876C2.09163 12.6876 1.89575 12.4917 1.89575 12.2501V8.16675C1.89575 7.92512 2.09163 7.72925 2.33325 7.72925Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.145752 8.16675C0.145752 7.92512 0.341627 7.72925 0.583252 7.72925H4.08325C4.32488 7.72925 4.52075 7.92512 4.52075 8.16675C4.52075 8.40837 4.32488 8.60425 4.08325 8.60425H0.583252C0.341627 8.60425 0.145752 8.40837 0.145752 8.16675Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7 6.5625C7.24162 6.5625 7.4375 6.75838 7.4375 7V12.25C7.4375 12.4916 7.24162 12.6875 7 12.6875C6.75838 12.6875 6.5625 12.4916 6.5625 12.25V7C6.5625 6.75838 6.75838 6.5625 7 6.5625Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.8125 4.66675C4.8125 4.42512 5.00838 4.22925 5.25 4.22925H8.75C8.99162 4.22925 9.1875 4.42512 9.1875 4.66675C9.1875 4.90837 8.99162 5.10425 8.75 5.10425H5.25C5.00838 5.10425 4.8125 4.90837 4.8125 4.66675Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 1.3125C11.9084 1.3125 12.1042 1.50838 12.1042 1.75V7C12.1042 7.24162 11.9084 7.4375 11.6667 7.4375C11.4251 7.4375 11.2292 7.24162 11.2292 7V1.75C11.2292 1.50838 11.4251 1.3125 11.6667 1.3125Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7 1.3125C7.24162 1.3125 7.4375 1.50838 7.4375 1.75V4.66667C7.4375 4.90829 7.24162 5.10417 7 5.10417C6.75838 5.10417 6.5625 4.90829 6.5625 4.66667V1.75C6.5625 1.50838 6.75838 1.3125 7 1.3125Z" fill="#FF3E5B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.33325 1.3125C2.57488 1.3125 2.77075 1.50838 2.77075 1.75V5.83333C2.77075 6.07496 2.57488 6.27083 2.33325 6.27083C2.09163 6.27083 1.89575 6.07496 1.89575 5.83333V1.75C1.89575 1.50838 2.09163 1.3125 2.33325 1.3125Z" fill="#FF3E5B" />
                                    </svg>
                                </span>
                                <h4 style={{ marginBottom: '0' }}>Advanced Filters</h4>
                            </Space>
                        </Space>
                    </Col>
                </Row>
                {/* tables */}
                <Table
                    tableHead={tableHead}
                    tableData={tableData}
                    emptyData={emptyData}
                />

                {/* Drawer */}
                <Drawer open={open} setOpen={setOpen} width={520} title="Add Application Criticality Group Details" />
            </Space>
        </div>
    )
}

export default CriticalityGroup