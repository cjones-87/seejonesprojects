import { useContext, useState } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const Resume = () => {
  const { darkTheme } = useContext(ThemeContext);

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
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        color: darkTheme ? 'whitesmoke' : 'black',
        marginTop: '-1.5rem',
        width,
      }}
    >
      <div style={{ fontSize: '1vmin' }}>
        <h1
          id="gradientText"
          style={{
            color: darkTheme ? '#434343' : 'black',
            filter: darkTheme
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
          content="download today!"
          target="#resume-download"
          position="top"
        />

        <Button
          className="lightDarkToggleButton"
          onClick={() => {
            window.open('/01CJsSWEPortfolioResume.pdf', '_blank');
            location.reload();
          }}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            background: darkTheme
              ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
              : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
            color: darkTheme ? 'whitesmoke' : '#ba68c8',
            textShadow: '2px 2px 2px indigo',
            width: width < 960 ? width / 2 : width / 6,
          }}
        >
          <i style={{ marginRight: '1rem' }} className="fa fa-file-pdf" />
          Download PDF
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Document
          file={'/01CJsSWEPortfolioResume.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page height={height} pageNumber={pageNumber} width={width} />
          <span
            style={{
              textAlign: 'center',
            }}
          >
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </span>
        </Document>
      </div>
    </div>
  );
};

export default Resume;
