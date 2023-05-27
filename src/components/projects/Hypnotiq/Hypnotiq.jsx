import React from 'react';
import IndividualProject from '../IndividualProject';
import HypnotiqData from '../data/HypnotiqData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const Hypnotiq = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject data={HypnotiqData} height={height} width={width} />
  );
};

export default Hypnotiq;
