import IndividualProject from '../IndividualProject';
import IdleClickerData from '../data/IdleClickerData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const IdleClicker = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={IdleClickerData}
      height={height}
      title="Idle Clicker"
      width={width}
    />
  );
};

export default IdleClicker;
