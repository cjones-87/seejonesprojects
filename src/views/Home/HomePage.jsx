import { lazy, useState } from 'react';

const LandingPage = lazy(() =>
  import('../../components/landingPage/LandingPage')
);
const Home = lazy(() => import('../../components/home/Home'));
const Head = lazy(() => import('../../components/reusableComponents/SEO/Head'));

const HomePage = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleEntranceClick = () => setShowHomePage(true);

  return (
    <div>
      <Head
        title='How to Build a Website: CJ Jones - SeeJonesEngineer'
        description='Hire CJ Jones, a skilled software engineer at SeeJonesEngineer, for expert guidance on building your website. Unlock a seamless website development experience by bringing on board an experienced professional dedicated to realizing & expanding your vision.'
      />

      {showHomePage ? (
        <Home showHomePage={showHomePage} />
      ) : (
        <LandingPage handleEntranceClick={handleEntranceClick} />
      )}
    </div>
  );
};

export default HomePage;
