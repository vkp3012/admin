import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Routes from '../Routes';

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render = {(props)=>(
                <div className='layout'>
                    <Sidebar {...props}/>
                    <div className="layout__content">
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
