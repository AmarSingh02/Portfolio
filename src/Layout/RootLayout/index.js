import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default RootLayout;
