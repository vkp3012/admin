import React from 'react'
import logo from "../../assets/images/logo.png";
import sidebar_item from '../../assets/JsonData/sidebar_routes.json';
import { Link } from "react-router-dom";
import './sidebar.css';

const SidebarItem = props => {
    const active = props.active ? "active" : ''
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}
const Sidebar = props => {
    const activeItem = sidebar_item.findIndex(item => item.route === props.location.pathname)
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="company logo"/>
            </div>
            {
                sidebar_item.map((item,index)=>(
                    <Link to={item.route} key={index}>
                        <div>
                            <SidebarItem 
                                title = {item.display_name}
                                icon = {item.icon}
                                active = {index === activeItem}
                            />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
