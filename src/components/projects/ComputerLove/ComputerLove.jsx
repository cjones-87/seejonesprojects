import IndividualProject from '../IndividualProject';
import ComputerLoveData from '../data/ComputerLoveData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const ComputerLove = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={ComputerLoveData}
      height={height}
      title="Computer Love"
      width={width}
    />
  );
};

export default ComputerLove;
