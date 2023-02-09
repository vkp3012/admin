import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Routes from '../Routes';
import './layout.css';
import TopNav from '../topnav/TopNav';
// import { useDispatch, useSelector } from 'react-redux';

const Layout = () => {
    // const themeReducer = useSelector(state => state.ThemeReducer)
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     const themeClass = localStorage.getItem('themeMode',"theme-mode-light")
    //     const colorClass = localStorage.getItem('colorMode',"theme-mode-light")
    // })
    return (
        <BrowserRouter>
            <Route render = {(props)=>(
                <div className='layout'>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
