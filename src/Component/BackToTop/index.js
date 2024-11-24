import React, {useState, useEffect} from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style.scss";

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState("");

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setBackToTop(scrollTop > 150);  
      };

    const scrollToTop = () => {
        window.scrollTo({
            top:0, 
            behavior:"smooth"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          // window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <button  className={`back-to-top-button ${backToTop ? 'toTop' : ''}`}
            onClick={scrollToTop} >
            <FaArrowUp />
        </button>
    )
}

export default BackToTop;