import React, { useState } from 'react'
import styles from './styles.module.scss'
import Title from '../../components/title'
import { useSelector } from 'react-redux';
import { Col, Row, Select, Space } from 'antd';
import Table from '../../components/table'

function AdminPage() {
    const theme = useSelector((state) => state.theme);
    const [isActiveTabs, setIsActiveTabs] = useState('1');

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const tableHead = [
        {
            key: '1',
            label: 'Customer ID'
        },
        {
            key: '2',
            label: 'Customer Name '
        },
        {
            key: '3',
            label: 'Customer Type'
        },
        {
            key: '4',
            label: 'Mobile No.'
        },
        {
            key: '5',
            label: 'Email Address'
        },
        {
            key: '6',
            label: 'Membership Type'
        },
        {
            key: '7',
            label: 'Action'
        }
    ]

    const tableData = [
        {
            key: "1",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        },
        {
            key: "2",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        },
        {
            key: "3",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        },
        {
            key: "4",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        },
        {
            key: "5",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        },
        {
            key: "6",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        },
        {
            key: "7",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        },
        {
            key: "8",
            tdOne: '9817239',
            tdTwo: 'John Doe',
            tdThree: 'Individual',
            tdFour: '9664321226',
            tdFive: 'johndoe@mahindra.com',
            tdSix: 'Golden',
        }
    ];


    return (
        <div className={styles.adminMaster} style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 13 }}>
            {/* title */}
            <div
                style={{ borderBottom: `1px solid ${theme === 'light' ? '#DEDEDE' : '#635D5D'}` }}
            >
                <Title title="Customer Master" />
            </div>
            <Space size={20} direction="vertical" style={{ width: '100%', }}>
                {/* header */}
                <div style={{
                    width: '100%', height: 'max-height', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '25px',
                    borderRadius: '4px', border: `1px solid ${theme === "light" ? '#E6E6E6' : '#635D5D'}`,
                    backgroundColor: theme === 'light' ? '#f2f2f2' : '#242424', padding: '14px 20px',
                }}
                >
                    {/* filter header */}
                    <Row gutter={20}>
                        <Col>
                            <Space size={15}>
                                {/* tabs */}
                                <div className={styles.tabs} style={{ border: `1px solid ${theme === "light" ? '#DEDEDE' : '#635D5D'}` }}>
                                    <button type='button' onClick={() => setIsActiveTabs('1')} style={{ background: isActiveTabs === '1' ? '#FF3E5B' : 'transparent', color: isActiveTabs === '1' ? '#fff' : `${theme === "light" ? 'black' : 'white'}` }}>Individual</button>
                                    <button type='button' onClick={() => setIsActiveTabs('2')} style={{ background: isActiveTabs === '2' ? '#FF3E5B' : 'transparent', color: isActiveTabs === '2' ? '#fff' : `${theme === "light" ? 'black' : 'white'}` }}>Firm/Corporate</button>
                                </div>

                            </Space>
                        </Col>
                        <Col>
                            <div className={styles.inputFields} style={{ background: theme === "dark" ? '#545454' : '#ffffff', }}>
                                <div className={styles.dropdown}>
                                    <Select
                                        showSearch
                                        placeholder="Customer name"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'jack',
                                                label: 'Jack',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'tom',
                                                label: 'Tom',
                                            },
                                        ]}
                                        className={styles.selectOptions}
                                    />
                                </div>
                                {/* input fields */}
                                <input type='text' placeholder='Enter customer name'
                                    style={{ color: theme === "dark" ? '#ffffff' : '#000000' }}
                                />
                                {/* search icons */}
                                <span className={styles.icons}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.43469 0.400024C3.9972 0.400024 0.399902 3.99732 0.399902 8.43481C0.399902 12.8723 3.9972 16.4696 8.43469 16.4696C10.4375 16.4696 12.2691 15.7368 13.6761 14.5248L18.5756 19.4243C18.8099 19.6586 19.1898 19.6586 19.4242 19.4243C19.6585 19.19 19.6585 18.8101 19.4242 18.5758L14.5246 13.6762C15.7367 12.2692 16.4695 10.4376 16.4695 8.43481C16.4695 3.99732 12.8722 0.400024 8.43469 0.400024ZM1.5999 8.43481C1.5999 4.66006 4.65994 1.60002 8.43469 1.60002C12.2094 1.60002 15.2695 4.66006 15.2695 8.43481C15.2695 12.2096 12.2094 15.2696 8.43469 15.2696C4.65994 15.2696 1.5999 12.2096 1.5999 8.43481Z" fill="#FF3E5B"></path></svg>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    {/* view draft */}
                    <span style={{ color: '#FF3E5B', cursor: 'pointer' }}>View Draft</span>
                </div>
                {/* table */}
                {/* tables */}
                <Table
                    tableHead={tableHead}
                    tableData={tableData}
                // emptyData={emptyData}
                />
            </Space>
        </div>
    )
}

export default AdminPage