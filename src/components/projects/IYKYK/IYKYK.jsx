import IndividualProject from '../IndividualProject';
import IYKYKData from '../data/IYKYKData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const IYKYK = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={IYKYKData}
      height={height}
      title="IYKYK"
      width={width}
    />
  );
};

export default IYKYK;
