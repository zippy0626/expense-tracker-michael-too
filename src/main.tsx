import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Hero from './components/Hero/Hero.tsx';
import Dashboard from './components/Dashboard/Dashboard.tsx';
import Upload from './components/Upload/Upload.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Hero /> },
  // Dashboard and Upload components injected inside App.tsx thru Outlet
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'upload', element: <Upload /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
