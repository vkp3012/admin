import React from 'react'

const ThemeMenu = () => {
    return (
        <div>
            <button className='dropdown_toggle' >
                <i className='bx bx-palette'></i>
            </button>
            <div className="theme-menu">
                <h4>Theme Setting</h4>
                <button>
                    <i className='bx bx-x'></i>
                </button>
                <div className="theme-menu__select">
                    <span>Choose Mode</span>
                    <ul className='mode-list'>
                        {

                        }
                    </ul>
                </div>
                <div className="theme-menu__select">
                    <span>Choose Color</span>
                    <ul className='mode-listy'>
                        {
                            
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThemeMenu
