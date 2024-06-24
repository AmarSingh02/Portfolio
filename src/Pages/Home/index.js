import React from 'react';
import './style.scss'
import SlideAnimationButton from '../../Component/ContactButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home_main'>
      Home 

      <SlideAnimationButton url='/about' btnName="Contact Us"> </SlideAnimationButton>
    </div>
  )
}

export default Home;
