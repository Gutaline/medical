import React from 'react'
import home from '../../img/home.png'

function Header(props) {
    return (
        <div className = "header">
            <div className = "header-btn_home" onClick = {() => props.goHome()}>
                <img src={home} alt="" />
            </div>
        </div>
    )
}

export default Header
