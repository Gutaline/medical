import React from 'react'
import close from '../../img/close.png'

import Slider from '../Slider/Slider'

function PopUp(props) {
    return (
        <div  className="popup">
            <div className="popup-btn"><img onClick = {()=>{props.onClick()}} src={close} alt="" /></div>
            <div className="popup-slider">
            <div className="popup-content">
                <div className = "popup-content__title">
                        <h2>Преимущества</h2>
                        <h1>BrendyXY</h1>
                </div>
                <div className = "popup-content__text">
                  <Slider arrow = {true} dots= {true}>
                      <div>
                          <span>01</span>
                          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                          <span>02</span>
                          <div>Faucibus pulvinar elementum integer enim</div>
                          <span>03</span>
                          <div>Faucibus pulvinar elementum integer enim</div>
                      </div>
                      <div>
                          <span>04</span>
                          <div>Mi bibendum neque egestas congue quisque egestas diam</div>
                          <span>05</span>
                          <div>Venenatis lectus magna fringilla urna </div>
                          <span>06</span>
                          <div>Venenatis lectus magna fringilla urna</div>
                      </div>
                  </Slider>  
                 </div>
            </div>
            </div>
        </div>
       
    )
}

export default PopUp
