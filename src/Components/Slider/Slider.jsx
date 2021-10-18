import React, { useEffect, useState,forwardRef,useImperativeHandle,useRef} from "react";
import "../../App.scss";

import leftArrow from '../../img/arrow.png'

function Slider({children,arrow,dots,ward},ref) {
  

  const [step, setStep] = useState(0);
  const test = useRef(null);
  const [currentSlide,SetCurrentSlide] = useState(0);

  let startX = 0;
  let trackLength = children.length;
  //let currentSlide = 0;

  useEffect(() => {
    setStep(test.current.offsetWidth);
    setSlide(currentSlide);
     // eslint-disable-next-line
  }, [test,ward]);



  useImperativeHandle(ref,()=> {
    return {
      getNextSlide() {
         nextSlide();
      },
      home() {
        setSlide(0);
      },
    }
  })
  const isSwipe = (startTouch, endTouch) => {
    const direction = startTouch - endTouch;
    const distance = Math.abs(startTouch - endTouch);

    if (direction > 0 && distance > 50 ) {
      // Swipe right
      nextSlide();
    } else if (direction < 0 && distance > 50 ) {
      // Swipe left
      prevSlide();
    }
  };

  
  const nextSlide = () => {
    if(currentSlide + 1 < trackLength) {
      
      setSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if(currentSlide - 1 >= 0) {
      setSlide(currentSlide-1);
    } 
  }


  const setSlide = (value) => {
    
    test.current.childNodes.forEach((element) => {
      element.style = `transform:translateX(-${value * step}px)`;
      });
      SetCurrentSlide(value);
  }

  const dotsRender = () => {
    return Array.from({length:children.length}).map((elem,index)=> {
      
        return <div className = {index === currentSlide? "track_dot active" :"track_dot"} key = {index} onClick = {() => setSlide(index)}></div>

    })
  }


  
  return (
  
      <div className="track">
        
      
          <div
            className="slider"
            ref={test}
            onPointerDown={(e) => {
              startX = e.pageX;
            }}
            onPointerUp={(e) => {
              isSwipe(startX, e.pageX);
            }}
            onTouchStart = {(e) => {
              startX = e.changedTouches[0].clientX;
          
            }}
            onTouchEnd = {(e) => {
              isSwipe(startX, e.changedTouches[0].clientX);
            }}
          >
            {children}
          </div>
       
        {dots &&
        <div className = "track_container-dots">
          {arrow &&
              <button className = "track_left-arrow"
                      onClick = {()=> {prevSlide()}}
              >
                <img src={leftArrow} alt="" />
              </button>
          }
          {dotsRender()}
          {arrow &&<button className = "track_right-arrow" onClick = {()=> {nextSlide()}}>
          <img src={leftArrow} alt="" />
          </button>
          }
        </div>
        }
      </div>
    
  );
};

export default forwardRef(Slider);
