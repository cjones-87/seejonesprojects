import React from 'react';
import { Route, Routes as NavigationRoutes } from 'react-router-dom';
import FrontEndRoutes from './FrontEndRoutes';

const Routes = () => {
  return (
    <>
      <NavigationRoutes>
        {FrontEndRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </NavigationRoutes>
    </>
  );
};

export default Routes;
