import { imageNotFound } from '../../photos/PhotoExports';

const handleImageFailure = (event) => {
  event.target.src = imageNotFound;
  event.onerror = null;
  return event;
};

export default handleImageFailure;
