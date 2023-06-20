import React from 'react';
import { Route, Routes } from 'react-router-dom'

// 
import Home from './Components/Home'
 // import Footer from './Layout/Footer'
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
      {/*  <Footer /> */}
    </React.Fragment>
  );
}

export default App;
