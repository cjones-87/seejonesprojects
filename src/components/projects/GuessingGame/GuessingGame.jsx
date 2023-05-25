import React from 'react';
import IndividualProject from '../IndividualProject';
import GuessingGameData from './GuessingGameData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const GuessingGame = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject data={GuessingGameData} height={height} width={width} />
  );
};

export default GuessingGame;
