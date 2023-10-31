import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const BusinessCard = () => {
  const { height, width } = useWindowDimensions();

  return (
    <iframe
      height={height / 2}
      scrolling='no'
      src='https://3d-business-card.vercel.app/'
      style={{ border: 0 }}
      width={width}
    />
  );
};

export default BusinessCard;
