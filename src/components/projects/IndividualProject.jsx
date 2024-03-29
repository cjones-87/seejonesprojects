import { lazy, Suspense } from 'react';
import { Card } from 'primereact/card';
import useTheme from '../../../misc/customHooks/useTheme';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';

const Spinner = lazy(() => import('../../../misc/Spinner'));
const LazyLoadImage = lazy(() =>
  import('../reusableComponents/lazy/LazyLoadImage')
);
const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const IndividualProject = ({
  data,
  headTitle,
  headDescription,
  height,
  title,
  width,
}) => {
  const { darkMode } = useTheme();

  return (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        fontSize: '1vmin',
        marginTop: 0,
        paddingTop: '1rem',
      }}
    >
      <Head title={headTitle} description={headDescription} />

      <h1
        id='gradientText'
        style={{
          color: darkMode ? '#434343' : 'black',
          filter: darkMode
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '7em',
          marginBottom: 0,
          textShadow: '2px 2px 2px indigo',
        }}
      >
        {title}
      </h1>

      <div
        style={{
          display: 'grid',
          margin: 'auto',
          maxWidth: width < 768 ? width : width / 2,
          placeItems: 'center',
        }}
      >
        {data.map((item, index) => {
          const header = (
            <Suspense fallback={<Spinner />}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {!item.img ? (
                  <iframe
                    height={height / 4}
                    onError={handleImageFailure}
                    src={item.iframe}
                    style={{
                      border: 0,
                      borderRadius: 25,
                      padding: 10,
                    }}
                    width={width < 768 ? width : width / 2}
                  />
                ) : (
                  <LazyLoadImage
                    alt={item.alt}
                    height={height / 4}
                    onError={handleImageFailure}
                    src={item.img}
                    style={{
                      borderRadius: 25,
                      padding: 10,
                    }}
                    width={width < 768 ? width : width / 2}
                  />
                )}
              </div>
            </Suspense>
          );

          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem',
              }}
            >
              <Suspense fallback={<Spinner />}>
                <Card
                  style={{
                    background: darkMode
                      ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                      : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
                    borderRadius: 25,
                    color: darkMode ? 'whitesmoke' : '#ba68c8',
                    textShadow: '1px 1px 1px indigo',
                  }}
                  header={header}
                >
                  <p className='m-0' style={{ textAlign: 'center' }}>
                    {item.paragraph}
                  </p>
                </Card>
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndividualProject;
