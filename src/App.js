import './App.scss';
import React, { useEffect } from 'react';
import Slider from './Components/Slider/Slider';
import Slide1 from './Components/Slide1/Slide1';
import Slide2 from './Components/Slide2/Slide2';
import Slide3 from './Components/Slide3/Slide3';
import Button from './Components/Button/Button';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const mainSlider = React.useRef(null);

  const [arcWard, setArcWard] = React.useState(0);

  useEffect(() => {
    function handleResize() {
      setArcWard(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [arcWard]);

  return (
    <div className="App">
      <Header goHome={() => mainSlider.current.home()} />
      <Slider ref={mainSlider} home={true} ward={arcWard}>
        <Slide1
          check={<Button symbol={'>'}>Что дальше?</Button>}
          onClick1={() => mainSlider.current.getNextSlide()}
        />
        <Slide2 />
        <Slide3 />
      </Slider>

      <Footer />
    </div>
  );
}

export default App;
