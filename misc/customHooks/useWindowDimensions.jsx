import { useEffect, useState } from 'react';
import debounce from '../helpers/debounce';

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize =
      dimensions.width < 768
        ? debounce(
            () => setDimensions({ height: innerHeight, width: innerWidth }),
            100
          )
        : debounce(() =>
            setDimensions({ height: innerHeight, width: innerWidth })
          );

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return dimensions;
};

export default useWindowDimensions;
