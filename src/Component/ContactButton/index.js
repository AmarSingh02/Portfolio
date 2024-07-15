import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss';

const SlideAnimationButton = (props) => {
  return (
    <>
    {/* <button class="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button> */}
    <div className='animatedbutton'>

  
      <Link to={props.url}  className="glow-on-hover" >{props.btnName}</Link>
      </div>
    </>
  )
}

export default SlideAnimationButton
