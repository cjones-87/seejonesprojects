import { lazy, useState } from 'react';
import useTheme from '../../../misc/customHooks/useTheme';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const Resume = () => {
  const { darkMode } = useTheme();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const { height, width } = useWindowDimensions();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(pageNumber);
  };

  return (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        color: darkMode ? 'whitesmoke' : 'black',
        marginTop: '-1.5rem',
        paddingBottom: '8rem',
        width,
      }}
    >
      <Head
        title='Professional Profile: CJ Jones - Software Engineer'
        description={`Unlock a comprehensive overview of CJ Jones's professional journey in the realm of software engineering. This page serves as a gateway to CJ's expertise, experience, and accomplishments. Explore a detailed resume that highlights key skills, notable projects, and educational background. From coding proficiency to project management, delve into the qualifications that define CJ Jones as a seasoned software engineer. Navigate through the pages of a dynamic career, where passion meets proficiency in the world of technology.`}
      />

      <div style={{ fontSize: '1vmin' }}>
        <h1
          id='gradientText'
          style={{
            color: darkMode ? '#434343' : 'black',
            filter: darkMode
              ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
              : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
            fontSize: '10em',
            paddingTop: '1rem',
            textAlign: 'center',
            textShadow: '2px 2px 2px indigo',
          }}
        >
          Resume
        </h1>
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '2rem',
        }}
      >
        <Tooltip
          content='download today!'
          target='#resume-download'
          position='top'
        />

        <Button
          className='lightDarkToggleButton'
          onClick={() => {
            window.open('/CJ_Jones_II_Portfolio_SWE_2024.pdf', '_blank');
            location.reload();
          }}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            background: darkMode
              ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
              : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
            color: darkMode ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
            width: width < 960 ? width / 2 : width / 6,
          }}
        >
          <i style={{ marginRight: '1rem' }} className='fa fa-file-pdf' />
          Download PDF
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Document
          file={'/CJ_Jones_II_Portfolio_SWE_2024.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <div
            style={{
              color: 'whitesmoke',
              textAlign: 'center',
            }}
          >
            <div style={{ paddingBottom: '2rem' }}>
              Page {pageNumber} of {numPages}
            </div>

            <Page height={height} pageNumber={pageNumber} width={width} />
          </div>

          <div style={{ color: 'whitesmoke', textAlign: 'center' }}>
            <div style={{ paddingBottom: '2rem' }}>
              Page {pageNumber + 1} of {numPages}
            </div>

            <Page height={height} pageNumber={pageNumber + 1} width={width} />
          </div>
        </Document>
      </div>
    </div>
  );
};

export default Resume;
