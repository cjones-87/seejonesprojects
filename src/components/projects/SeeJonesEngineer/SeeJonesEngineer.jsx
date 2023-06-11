import IndividualProject from '../IndividualProject';
import SeeJonesEngineerData from '../data/SeeJonesEngineerData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const SeeJonesEngineer = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={SeeJonesEngineerData}
      height={height}
      title="See Jones Engineer"
      width={width}
    />
  );
};

export default SeeJonesEngineer;
