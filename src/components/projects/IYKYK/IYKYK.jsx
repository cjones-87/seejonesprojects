import React from 'react';
import IndividualProject from '../IndividualProject';
import IYKYKData from '../data/IYKYKData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const IYKYK = () => {
  const { height, width } = useWindowDimensions();
  return <IndividualProject data={IYKYKData} height={height} width={width} />;
};

export default IYKYK;
