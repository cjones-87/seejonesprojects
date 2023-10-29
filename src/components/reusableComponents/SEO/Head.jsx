import { Helmet } from 'react-helmet';

const Head = ({ description, title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

export default Head;
