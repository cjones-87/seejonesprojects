import React from 'react';
import IndividualProject from '../IndividualProject';
import ComputerLoveData from './ComputerLoveData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const ComputerLove = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject data={ComputerLoveData} height={height} width={width} />
  );
};

export default ComputerLove;
