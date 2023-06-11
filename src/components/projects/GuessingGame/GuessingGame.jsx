import IndividualProject from '../IndividualProject';
import GuessingGameData from '../data/GuessingGameData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const GuessingGame = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={GuessingGameData}
      height={height}
      title="Guessing Game"
      width={width}
    />
  );
};

export default GuessingGame;
