import React from 'react';
import IndividualProject from '../IndividualProject';
import SeeJonesEngineerData from './SeeJonesEngineerData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const SeeJonesEngineer = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={SeeJonesEngineerData}
      height={height}
      width={width}
    />
  );
};

export default SeeJonesEngineer;
