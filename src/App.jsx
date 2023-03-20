import React, { lazy, Suspense } from 'react';
import Routes from './navigation/NavigationRoutes';
import Spinner from './misc/Spinner';
import './index.css';

const Navbar = lazy(() => import('./components/home/Navbar'));
const Footer = lazy(() => import('./components/home/Footer'));

export const Loading = () => (
  <div
    style={{
      left: '50%',
      position: 'fixed',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Spinner />
  </div>
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
