import React, { Suspense } from 'react';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const Cube = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingBottom: '2rem',
        width,
      }}
    >
      <div className="App">
        <Suspense>
          <iframe
            className="myClassname"
            height={height / 2}
            id="myId"
            src="https://3d-box-animation.vercel.app/"
            style={{ border: 0 }}
            width={width}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Cube;
