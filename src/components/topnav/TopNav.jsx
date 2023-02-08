import React from 'react'
// import { Link } from "react-router-dom";
import Dropdown from '../dropdown/Dropdown'
import "./topnav.css";

const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type= "text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown/>
                </div>
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown/>
                </div>
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown />
                </div>


            </div>


        </div>
    )
}

export default TopNav
