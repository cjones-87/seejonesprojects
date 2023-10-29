import { lazy, useContext, Suspense } from 'react';
import { AboutMeData } from './data/AboutMeData';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';

const Spinner = lazy(() => import('../../../misc/Spinner'));
const AboutMeCards = lazy(() => import('./AboutMeCards'));
const Specialization = lazy(() => import('../techSkills/Specialization'));
const TechSkills = lazy(() => import('../techSkills/TechSkills'));
const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const AboutMe = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        fontSize: '1vmin',
        marginTop: '-1.5rem',
        textAlign: 'center',
        width: '100vw',
      }}
    >
      <Head
        title='Meet CJ Jones: The Mind Behind Software Excellence'
        description={`Get to know the driving force behind software innovation—CJ Jones. With a passion for crafting exceptional user experiences and a wealth of experience in software engineering, CJ brings a unique blend of creativity and technical prowess to every project. Explore the journey, expertise, and values that shape CJ's approach to building intuitive and powerful software solutions. Discover the person behind the code, dedicated to pushing the boundaries of what's possible in the digital realm.`}
      />

      <h1
        id='gradientText'
        style={{
          color: darkTheme ? '#434343' : 'black',
          filter: darkTheme
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '10em',
          paddingTop: '2rem',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        About Me
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Suspense fallback={<Spinner />}>
          <AboutMeCards slides={AboutMeData} />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<Spinner />}>
          <Specialization />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<Spinner />}>
          <TechSkills />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutMe;
