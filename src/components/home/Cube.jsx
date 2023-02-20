import React, { Suspense, useEffect, useState } from 'react';

import Iframe from 'react-iframe';

const Cube = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingBottom: '2rem',
        width: dimensions.width,
      }}
    >
      <div className="App" style={{ width: dimensions.width }}>
        <Suspense fallback={<p>Loading....</p>}>
          <Iframe
            url="https://3d-box-animation.vercel.app/"
            width="100%"
            id="myId"
            scrolling="no"
            frameBorder={0}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Cube;
