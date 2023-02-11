import React from 'react'
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import StatusCard from "../components/status-card/StatusCard"
import Badge from "../components/badge/Badge";
import statusCards from '../assets/JsonData/status-card-data.json';
const chartOptions = {
    series : [{
        name : 'Online Customers',
        data : [40,70,20,90,36,80,30,91,60,10]
    },{
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}


const Dashboard = () => {
    const themeReducer = useSelector(state => state.themeReducer.node);
    return (
        <div>
            <h2 className='page-header'>Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item,index)=> (
                                <div className="col-6" key={index}>
                                    <StatusCard 
                                        icon = {item.icon}
                                        count = {item.count}
                                        title = {item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <Chart 
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme : { mode : 'dark'}
                            }:{
                                ...chartOptions.options,
                                theme : { mode : 'light'}
                            }}
                            series= {chartOptions.series}
                            type = "line"
                            height= '100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
