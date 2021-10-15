import React from 'react'
import bacterium from '../../img/bacterium.png'
import bacterium2 from '../../img/bacterium-2.png'


function Slide1(props) {
    return (
        <div className = "slide1">
            <div className = "slide1-bacterium" >
                <img src={bacterium} alt="" />
            </div>
            <div className = "slide1-bacterium2" >
                <img src={bacterium2} alt="" />
            </div>
            <div className = "slide1-bacterium3" >
                <img src={bacterium2} alt="" />
            </div>
            <div className = "slide1-text">
                <span className = "slide1-title" >Привет,</span>
                <div className = "slide1-subtitle" >
                    это <span> не </span> коммерческое задание
                </div>
                <div className = "slide1-btn" onClick = {() => props.onClick1()}>
                    {props.check}
                </div>
            </div>
            
            
        </div>
    )
}

export default Slide1
