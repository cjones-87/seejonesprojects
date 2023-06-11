import IndividualProject from '../IndividualProject';
import HypnotiqData from '../data/HypnotiqData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const Hypnotiq = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={HypnotiqData}
      height={height}
      title="Hypnotiq Musiq"
      width={width}
    />
  );
};

export default Hypnotiq;
