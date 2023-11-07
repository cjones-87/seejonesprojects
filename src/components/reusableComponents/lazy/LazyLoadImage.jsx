import { useEffect, useRef, useState } from 'react';

const LazyLoadImage = ({
  alt,
  className,
  height,
  id,
  onClick,
  onError,
  src,
  style,
  width,
}) => {
  const [isLoaded, setIsLoaded] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        imageRef.current.src = src;
        observer.unobserve(imageRef.current);
      }
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  const handleImageLoad = () => setIsLoaded(true);

  return (
    <img
      alt={alt}
      className={className}
      height={height}
      id={id}
      onClick={onClick}
      onError={onError}
      onLoad={handleImageLoad}
      ref={imageRef}
      style={{ ...style, filter: isLoaded ? 'none' : 'blur(10px)' }}
      width={width}
    />
  );
};

export default LazyLoadImage;
