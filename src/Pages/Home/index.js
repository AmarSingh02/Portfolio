import React from 'react';
import './style.scss'
import SlideAnimationButton from '../../Component/ContactButton';
import { Link } from 'react-router-dom';
import SwipeContactButton from '../../Component/SwipeContactButton';
import { MY_IMG } from './Constant';

const Home = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>My name is <span style={{color:'#1d194c'}}>Amar Singh </span></h1>
              <p>I'm <h3> Frontend web developer </h3> passionate about creating intuitive and user-friendly web applications. I am excited to dive into the world of web development and make a meaningful contribution to any team I am a part of.</p>
              <SwipeContactButton/>
            </div>
            <div className="col-md-6 profile">

              <div className="my_profile">
                <img src={MY_IMG} alt="my_profile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

 
    </>
  )
}

export default Home;
