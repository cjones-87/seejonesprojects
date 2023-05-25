import React from 'react';
import IndividualProject from '../IndividualProject';
import BoundzBookstoreData from './BoundzBookstoreData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const BoundzBookstore = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={BoundzBookstoreData}
      height={height}
      width={width}
    />
  );
};

export default BoundzBookstore;
