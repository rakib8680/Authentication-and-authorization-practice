import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='text-4xl'>Hi</div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;