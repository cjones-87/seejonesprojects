import React, { Suspense, useEffect, useState } from 'react';

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
        <Suspense>
          <iframe
            className="myClassname"
            height={dimensions.height / 2}
            id="myId"
            src="https://3d-box-animation.vercel.app/"
            style={{ border: 0 }}
            width={dimensions.width}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Cube;
