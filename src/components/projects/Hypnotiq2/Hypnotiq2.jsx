import React from 'react';
import IndividualProject from '../IndividualProject';
import Hypnotiq2Data from '../data/Hypnotiq2Data';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const Hypnotiq2 = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject data={Hypnotiq2Data} height={height} width={width} />
  );
};

export default Hypnotiq2;
