import React from 'react';
import './style.scss'
import SlideAnimationButton from '../../Component/ContactButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>I am <span style={{color:'#1d194c'}}>Amar Singh </span></h1>
              <p></p>
            </div>
            <div className="col-md-6 profile">

              <div className="my_profile">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </>
  )
}

export default Home;
