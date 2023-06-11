import IndividualProject from '../IndividualProject';
import BluepringBoilerplateData from '../data/BluepringBoilerplateData';
import useWindowDimensions from '../../../../misc/customHooks/useWindowDimensions';

const BluepringBoilerplate = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IndividualProject
      data={BluepringBoilerplateData}
      height={height}
      title="Bluepring Boilerplate"
      width={width}
    />
  );
};

export default BluepringBoilerplate;
