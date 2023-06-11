import IndividualProject from '../IndividualProject';
import BlueprintBoilerplateData from '../data/BlueprintBoilerplateData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const BlueprintBoilerplate = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={BlueprintBoilerplateData}
      height={height}
      title="Blueprint Boilerplate"
      width={width}
    />
  );
};

export default BlueprintBoilerplate;
