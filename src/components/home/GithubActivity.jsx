import React, { useEffect, useState } from 'react';

const GithubActivity = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20 App card'
          : 'bg-black-alpha-90 App card'
      }
      style={{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <a href="https://skyline.github.com/cjones-87/2021">
        <iframe
          height={dimensions.height / 3}
          src="https://www.youtube.com/embed/BAhz7BLA3rA"
          width={dimensions.width / 3}
        ></iframe>
      </a>

      <a href="https://skyline.github.com/cjones-87/2022">
        <iframe
          height={dimensions.height / 3}
          src="https://www.youtube.com/embed/fwvVifpo93o"
          width={dimensions.width / 3}
        ></iframe>
      </a>

      <a href="https://skyline.github.com/cjones-87/2023">
        <iframe
          height={dimensions.height / 3}
          src="https://www.youtube.com/embed/-jgXmlOViws"
          width={dimensions.width / 3}
        ></iframe>
      </a>
    </div>
  );
};

export default GithubActivity;
