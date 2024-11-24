import React from 'react';

import { BrowserRouter, Routes, Route } from  "react-router-dom";

//  import 'bootstrap/dist/css/bootstrap.min.css';
// import RootLayout from './Layout/RootLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Component/Footer';
import Header from './Component/Header';
import RootLayout from './Layout/RootLayout';
import ContactUs from './Pages/ContactUs';

const App = () => {
  return (
    <>

  {/* <Helmet>
    <title>Amar's Portfolio</title>
    <meta name="description" content="Now More About me go through my digital portfolio"/>
  </Helmet> */}


  <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={"Not found"} />

          
         
      </Route>
      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App;
