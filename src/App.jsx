import React from 'react';
import { Route, Routes } from 'react-router-dom'

// 
import Home from './Components/Home'
import Contact from './Components/Contact';
// import Footer from './Layout/Footer'
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/*  <Footer /> */}
    </React.Fragment>
  );
}

export default App;
