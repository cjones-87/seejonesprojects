import { lazy, Suspense } from 'react';
import useTheme from '../../../misc/customHooks/useTheme';

const Spinner = lazy(() => import('../../../misc/Spinner'));
const BusinessCard = lazy(() => import('./BusinessCard'));
const ContactForm = lazy(() => import('./ContactForm'));
const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const ContactMe = () => {
  const { darkMode } = useTheme();

  return (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        width: '100vw',
      }}
    >
      <Head
        title='Software Engineer For Hire: CJ Jones - SeeJonesEngineer'
        description={`Discover the expertise of CJ Jones, a seasoned software engineer ready to elevate your projects to new heights. From full-time positions to contract work, tutoring, mentoring, and consulting, explore a range of collaboration opportunities tailored to meet your unique needs. CJ brings a wealth of experience in creating intuitive, powerful software solutions. Reach out today to discuss how CJ Jones can contribute to your success. Let's build something extraordinary together.`}
      />

      <div
        style={{
          fontSize: '1vmin',
          marginTop: '-1.5rem',
        }}
      >
        <h1
          id='gradientText'
          style={{
            color: darkMode ? '#434343' : 'black',
            filter: darkMode
              ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
              : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
            fontSize: '10em',
            marginBottom: '0rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            textAlign: 'center',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Hire Me
        </h1>
      </div>

      <div>
        <Suspense fallback={<Spinner />}>
          <ContactForm />
        </Suspense>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Suspense fallback={<Spinner />}>
          <BusinessCard />
        </Suspense>
      </div>
    </div>
  );
};

export default ContactMe;
