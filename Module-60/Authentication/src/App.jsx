import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;