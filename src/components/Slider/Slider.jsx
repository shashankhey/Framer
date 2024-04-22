import React from 'react';
import './Slider.css';
import slider1 from '../../assets/slider-1.webp';
import slider2 from '../../assets/slider-2.webp';
import slider3 from '../../assets/slider-3.webp';
import slider4 from '../../assets/slider-4.webp';
import slider5 from '../../assets/slider-5.webp';
import slider6 from '../../assets/slider-6.webp';

const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider-track">
        <div className="slide">
          <img src={slider1} alt="Slider 1" />
        </div>
        <div className="slide">
          <img src={slider2} alt="Slider 2" />
        </div>
        <div className="slide">
          <img src={slider3} alt="Slider 3" />
        </div>
        <div className="slide">
          <img src={slider4} alt="Slider 4" />
        </div>
        <div className="slide">
          <img src={slider5} alt="Slider 5" />
        </div>
        <div className="slide">
          <img src={slider6} alt="Slider 6" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
