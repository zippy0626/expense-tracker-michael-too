import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SideNavbar from './components/SideNavbar/SideNavbar.tsx';

function App() {
  return (
    <>
      <SideNavbar />
      <Outlet />
    </>
  );
}

export default App;
