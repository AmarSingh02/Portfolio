import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import './style.scss'

const SwipeContactButton = (props) => {
  return (
    <div className='swipeContactButtton'>
    <Link to="/contact">

      <div class="btn-container">
  <button>
    <span class="text">Contact Me</span>
    <div class="icon-container">
      <div class="icon icon--left">
        <GoArrowRight/>
      </div>
     
    </div>
  </button>
</div>
    </Link>



{/* <svg style="display: none;">
  <symbol id="arrow-right" viewBox="0 0 20 10">
    <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
  </symbol>
</svg> */}

{/* <div class="support">
  <a href="https://twitter.com/DevLoop01" target="_blank"><i class="fab fa-twitter-square"></i></a>
  <a href="https://dribbble.com/devloop01" target="_blank"><i class="fab fa-dribbble"></i></a>
</div> */}
    </div>
  )
}

export default SwipeContactButton;
