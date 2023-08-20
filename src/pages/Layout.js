import React from 'react'
import Sidebar from '../components/Sidebar/index';
import Header from '../components/Header/index';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import CriticalityGroup from './criticalitygroup';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './admin';
import DashboardPage from './dashboard';
const { Content, Footer } = Layout;

function PageLayout() {

    const theme = useSelector((state) => state.theme);

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            {/* sidebar */}
            <Sidebar />
            {/* contents */}
            <Layout>
                {/* Headers */}
                <Header />
                {/* main contents */}
                <Content
                    style={{
                        backgroundColor: theme === 'light' ? 'white' : '#0B0B0C',
                        color: theme === 'light' ? 'black' : 'white'
                    }}
                >
                    {/* <CriticalityGroup /> */}
                    <Routes>
                        <Route path='/admin' element={<AdminPage />}></Route>
                        <Route exact path='/favourites' element={<CriticalityGroup />}></Route>
                        <Route exact path='/' element={<DashboardPage />}></Route>
                    </Routes>
                </Content>
                {/* footers */}
                <Footer
                    style={{
                        textAlign: 'center',
                        backgroundColor: theme === 'light' ? 'white' : '#0B0B0C',
                        color: theme === 'light' ? 'black' : 'white'
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default PageLayout