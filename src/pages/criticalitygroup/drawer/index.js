import React, { useState } from 'react'
import { Col, Drawer, Row, Switch, TimePicker } from 'antd';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss'
import InputFields from '../../../components/inputFields'
// import SwitchInput from '../../components/switchInputFields'
import Divider from '../../../components/divider'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

function Index({ open, setOpen, title, width }) {

    const onClose = () => {
        setOpen(false);
    };

    const theme = useSelector((state) => state.theme);

    const [inputValue, setInputValue] = useState('');

    const [isChecked, setIsChecked] = useState(true);
    const [isChecked_2, setIsChecked_2] = useState(true);

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setIsChecked(!isChecked)
    };

    const onChange_2 = (checked) => {
        console.log(`switch to ${checked}`);
        setIsChecked_2(!isChecked_2)
    };

    const onChangeTime = (time, timeString) => {
        console.log(time, timeString);
    };

    return (
        <>
            <Drawer style={{
                background: theme === "light" ? '#ffffff' : '#242424',
                color: theme === "light" ? '#000000' : '#ffffff',
            }}
                // title={title}
                closeIcon={false}
                placement="right"
                width={width} onClose={onClose}
                open={open}
                className={styles.DrawerContainer}
            >
                {/* head */}
                <div className={styles.head} style={{ marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '0' }}>{title}</h3>
                    {/* icons */}
                    <span onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.45537 3.95529C3.61809 3.79257 3.88191 3.79257 4.04463 3.95529L10 9.91066L15.9554 3.95529C16.1181 3.79257 16.3819 3.79257 16.5446 3.95529C16.7073 4.11801 16.7073 4.38183 16.5446 4.54455L10.5893 10.4999L16.5446 16.4553C16.7073 16.618 16.7073 16.8818 16.5446 17.0445C16.3819 17.2073 16.1181 17.2073 15.9554 17.0445L10 11.0892L4.04463 17.0445C3.88191 17.2073 3.61809 17.2073 3.45537 17.0445C3.29265 16.8818 3.29265 16.618 3.45537 16.4553L9.41074 10.4999L3.45537 4.54455C3.29265 4.38183 3.29265 4.11801 3.45537 3.95529Z"
                                fill="currentColor" />
                        </svg>
                    </span>
                </div>
                {/* divider */}
                <Divider />
                {/* form contents */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0',
                    marginBottom: '30px'
                }}>
                    <div style={{ width: '100%' }}>
                        <label style={{ marginBottom: '6px', display: 'block' }}>Criticality Group ID<span style={{ color: '#ED302D', }}>*</span>
                            <span style={{ marginLeft: '5px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.9999 2.5999C4.29371 2.5999 2.0999 4.79371 2.0999 7.4999C2.0999 10.2061 4.29371 12.3999 6.9999 12.3999C9.7061 12.3999 11.8999 10.2061 11.8999 7.4999C11.8999 4.79371 9.7061 2.5999 6.9999 2.5999ZM1.3999 7.4999C1.3999 4.40711 3.90711 1.8999 6.9999 1.8999C10.0927 1.8999 12.5999 4.40711 12.5999 7.4999C12.5999 10.5927 10.0927 13.0999 6.9999 13.0999C3.90711 13.0999 1.3999 10.5927 1.3999 7.4999ZM6.9999 4.47581C7.1932 4.47581 7.3499 4.63251 7.3499 4.82581V4.8749C7.3499 5.0682 7.1932 5.2249 6.9999 5.2249C6.8066 5.2249 6.6499 5.0682 6.6499 4.8749V4.82581C6.6499 4.63251 6.8066 4.47581 6.9999 4.47581ZM6.9999 5.98324C7.1932 5.98324 7.3499 6.13994 7.3499 6.33324V10.4166C7.3499 10.6099 7.1932 10.7666 6.9999 10.7666C6.8066 10.7666 6.6499 10.6099 6.6499 10.4166V6.33324C6.6499 6.13994 6.8066 5.98324 6.9999 5.98324Z" fill="#2782F9" />
                                </svg>
                            </span>
                        </label>
                        {/* input fields */}
                        <InputFields setInputValue={setInputValue} placeholder='Enter ID' />
                    </div>
                    <div style={{ width: '100%' }}>
                        <label style={{ marginBottom: '6px', display: 'block' }}>Criticality Group Name<span style={{ color: '#ED302D' }}>*</span>
                            <span style={{ marginLeft: '5px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.9999 2.5999C4.29371 2.5999 2.0999 4.79371 2.0999 7.4999C2.0999 10.2061 4.29371 12.3999 6.9999 12.3999C9.7061 12.3999 11.8999 10.2061 11.8999 7.4999C11.8999 4.79371 9.7061 2.5999 6.9999 2.5999ZM1.3999 7.4999C1.3999 4.40711 3.90711 1.8999 6.9999 1.8999C10.0927 1.8999 12.5999 4.40711 12.5999 7.4999C12.5999 10.5927 10.0927 13.0999 6.9999 13.0999C3.90711 13.0999 1.3999 10.5927 1.3999 7.4999ZM6.9999 4.47581C7.1932 4.47581 7.3499 4.63251 7.3499 4.82581V4.8749C7.3499 5.0682 7.1932 5.2249 6.9999 5.2249C6.8066 5.2249 6.6499 5.0682 6.6499 4.8749V4.82581C6.6499 4.63251 6.8066 4.47581 6.9999 4.47581ZM6.9999 5.98324C7.1932 5.98324 7.3499 6.13994 7.3499 6.33324V10.4166C7.3499 10.6099 7.1932 10.7666 6.9999 10.7666C6.8066 10.7666 6.6499 10.6099 6.6499 10.4166V6.33324C6.6499 6.13994 6.8066 5.98324 6.9999 5.98324Z" fill="#2782F9" />
                                </svg>
                            </span>
                        </label>
                        {/* input fields */}
                        <InputFields setInputValue={setInputValue} placeholder='Enter name' />
                    </div>
                </div>
                <Row gutter={20} style={{
                    marginBottom: '30px'
                }}>
                    {/* switch contents */}
                    <Col span={12}>
                        <div>
                            <label style={{ marginBottom: '6px', display: 'block' }}>Default Group<span style={{ color: '#ED302D' }}>*</span>
                                <span style={{ marginLeft: '5px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.9999 2.5999C4.29371 2.5999 2.0999 4.79371 2.0999 7.4999C2.0999 10.2061 4.29371 12.3999 6.9999 12.3999C9.7061 12.3999 11.8999 10.2061 11.8999 7.4999C11.8999 4.79371 9.7061 2.5999 6.9999 2.5999ZM1.3999 7.4999C1.3999 4.40711 3.90711 1.8999 6.9999 1.8999C10.0927 1.8999 12.5999 4.40711 12.5999 7.4999C12.5999 10.5927 10.0927 13.0999 6.9999 13.0999C3.90711 13.0999 1.3999 10.5927 1.3999 7.4999ZM6.9999 4.47581C7.1932 4.47581 7.3499 4.63251 7.3499 4.82581V4.8749C7.3499 5.0682 7.1932 5.2249 6.9999 5.2249C6.8066 5.2249 6.6499 5.0682 6.6499 4.8749V4.82581C6.6499 4.63251 6.8066 4.47581 6.9999 4.47581ZM6.9999 5.98324C7.1932 5.98324 7.3499 6.13994 7.3499 6.33324V10.4166C7.3499 10.6099 7.1932 10.7666 6.9999 10.7666C6.8066 10.7666 6.6499 10.6099 6.6499 10.4166V6.33324C6.6499 6.13994 6.8066 5.98324 6.9999 5.98324Z" fill="#2782F9" />
                                    </svg>
                                </span>
                            </label>
                            {/* input fields */}
                            {/* <SwitchInput size='small' setIsCheckedStatus={setIsCheckedStatus} isChecked={isCheckedStatus} /> */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Switch defaultChecked size='small' onChange={onChange} className={styles.switchInput} />
                                {
                                    isChecked === true ?
                                        <span style={{ color: '#70C922' }}>Active</span>
                                        :
                                        <span style={{ color: '#858585' }}>Inactive</span>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <label style={{ marginBottom: '6px', display: 'block' }}>Status<span style={{ color: '#ED302D' }}>*</span>
                                <span style={{ marginLeft: '5px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.9999 2.5999C4.29371 2.5999 2.0999 4.79371 2.0999 7.4999C2.0999 10.2061 4.29371 12.3999 6.9999 12.3999C9.7061 12.3999 11.8999 10.2061 11.8999 7.4999C11.8999 4.79371 9.7061 2.5999 6.9999 2.5999ZM1.3999 7.4999C1.3999 4.40711 3.90711 1.8999 6.9999 1.8999C10.0927 1.8999 12.5999 4.40711 12.5999 7.4999C12.5999 10.5927 10.0927 13.0999 6.9999 13.0999C3.90711 13.0999 1.3999 10.5927 1.3999 7.4999ZM6.9999 4.47581C7.1932 4.47581 7.3499 4.63251 7.3499 4.82581V4.8749C7.3499 5.0682 7.1932 5.2249 6.9999 5.2249C6.8066 5.2249 6.6499 5.0682 6.6499 4.8749V4.82581C6.6499 4.63251 6.8066 4.47581 6.9999 4.47581ZM6.9999 5.98324C7.1932 5.98324 7.3499 6.13994 7.3499 6.33324V10.4166C7.3499 10.6099 7.1932 10.7666 6.9999 10.7666C6.8066 10.7666 6.6499 10.6099 6.6499 10.4166V6.33324C6.6499 6.13994 6.8066 5.98324 6.9999 5.98324Z" fill="#2782F9" />
                                    </svg>
                                </span>
                            </label>
                            {/* input fields */}
                            {/* <SwitchInput size='small' setIsCheckedStatus={setIsCheckedStatus} isChecked={isCheckedStatus} /> */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Switch defaultChecked size='small' onChange={onChange_2} className={styles.switchInput} />
                                {
                                    isChecked_2 === true ?
                                        <span style={{ color: '#70C922' }}>Active</span>
                                        :
                                        <span style={{ color: '#858585' }}>Inactive</span>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* divider */}
                <Divider />
                {/* Allowed Timings */}
                <div className={styles.allowedTime}>
                    {/* title */}
                    <h4>Allowed Timings<span style={{ color: '#ED302D', marginBottom: '20px' }}>*</span></h4>
                    {/* times contents */}
                    <div className={styles.timeContent}
                        style={{
                            background: theme === "light" ? '#F2F2F2' : '#1C1A1A',
                            border: `1px solid ${theme === "light" ? '#E6E6E6' : '#635d5d'}`
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div className={styles.timePicker}>
                                <label style={{ marginBottom: '6px', display: 'block' }}>
                                    Start Time
                                    <span style={{ marginLeft: '5px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.9999 2.5999C4.29371 2.5999 2.0999 4.79371 2.0999 7.4999C2.0999 10.2061 4.29371 12.3999 6.9999 12.3999C9.7061 12.3999 11.8999 10.2061 11.8999 7.4999C11.8999 4.79371 9.7061 2.5999 6.9999 2.5999ZM1.3999 7.4999C1.3999 4.40711 3.90711 1.8999 6.9999 1.8999C10.0927 1.8999 12.5999 4.40711 12.5999 7.4999C12.5999 10.5927 10.0927 13.0999 6.9999 13.0999C3.90711 13.0999 1.3999 10.5927 1.3999 7.4999ZM6.9999 4.47581C7.1932 4.47581 7.3499 4.63251 7.3499 4.82581V4.8749C7.3499 5.0682 7.1932 5.2249 6.9999 5.2249C6.8066 5.2249 6.6499 5.0682 6.6499 4.8749V4.82581C6.6499 4.63251 6.8066 4.47581 6.9999 4.47581ZM6.9999 5.98324C7.1932 5.98324 7.3499 6.13994 7.3499 6.33324V10.4166C7.3499 10.6099 7.1932 10.7666 6.9999 10.7666C6.8066 10.7666 6.6499 10.6099 6.6499 10.4166V6.33324C6.6499 6.13994 6.8066 5.98324 6.9999 5.98324Z" fill="#2782F9" />
                                        </svg>
                                    </span>
                                </label>
                                <TimePicker
                                    className={`${styles.timeStamp} ${theme === "light" ? 'lightTheme' : 'darkTheme'}`}
                                    style={{ background: 'transparent', color: theme === "light" ? 'black' : 'white', border: `1px solid ${theme === "light" ? '#B5B5B6' : '#635d5d'}` }}
                                    onChange={onChangeTime} placeholder='Select date' defaultValue={dayjs('00:00:00', 'HH:mm:ss')} />
                            </div>

                            <div className={styles.timePicker}>
                                <label style={{ marginBottom: '6px', display: 'block' }}>
                                    Start Time
                                    <span style={{ marginLeft: '5px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.9999 2.5999C4.29371 2.5999 2.0999 4.79371 2.0999 7.4999C2.0999 10.2061 4.29371 12.3999 6.9999 12.3999C9.7061 12.3999 11.8999 10.2061 11.8999 7.4999C11.8999 4.79371 9.7061 2.5999 6.9999 2.5999ZM1.3999 7.4999C1.3999 4.40711 3.90711 1.8999 6.9999 1.8999C10.0927 1.8999 12.5999 4.40711 12.5999 7.4999C12.5999 10.5927 10.0927 13.0999 6.9999 13.0999C3.90711 13.0999 1.3999 10.5927 1.3999 7.4999ZM6.9999 4.47581C7.1932 4.47581 7.3499 4.63251 7.3499 4.82581V4.8749C7.3499 5.0682 7.1932 5.2249 6.9999 5.2249C6.8066 5.2249 6.6499 5.0682 6.6499 4.8749V4.82581C6.6499 4.63251 6.8066 4.47581 6.9999 4.47581ZM6.9999 5.98324C7.1932 5.98324 7.3499 6.13994 7.3499 6.33324V10.4166C7.3499 10.6099 7.1932 10.7666 6.9999 10.7666C6.8066 10.7666 6.6499 10.6099 6.6499 10.4166V6.33324C6.6499 6.13994 6.8066 5.98324 6.9999 5.98324Z" fill="#2782F9" />
                                        </svg>
                                    </span>
                                </label>
                                <TimePicker
                                    className={`${styles.timeStamp} ${theme === "light" ? 'lightTheme' : 'darkTheme'}`}
                                    style={{ background: 'transparent', color: theme === "light" ? 'black' : 'white', border: `1px solid ${theme === "light" ? '#B5B5B6' : '#635d5d'}` }}
                                    onChange={onChangeTime} placeholder='Select date' defaultValue={dayjs('00:00:00', 'HH:mm:ss')} />
                            </div>
                        </div>

                        {/* button */}
                        <button type='button' arial-label='add' className={styles.button}>Add</button>

                    </div>

                </div>

                {/* footer */}
                <div className={styles.footer} style={{
                    backgroundColor: theme === "light" ? '#ffffff' : '#242424',
                    borderTop: `1px solid ${theme === "light" ? '#E6E6E6' : '#635d5d'}`
                }}>
                    {/* left side */}
                    <button type='cancel' style={{ color: '#FF3E5B', border: '1px solid #FF3E5B' }}>Cancel</button>
                    <div className={styles.buttonContainer}>
                        <button type='submit'>Save</button>
                        <button type='button'>Save & Add New</button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Index