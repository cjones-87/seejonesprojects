import React, { useState } from 'react';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import { Tooltip } from 'primereact/tooltip';
import { NavLink } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
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
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        color:
          localStorage.getItem('lightMode') === 'true' ? 'black' : 'whitesmoke',
        marginTop: '-1.5rem',
        width,
      }}
    >
      <div style={{ fontSize: '1vmin' }}>
        <h1
          id="gradientText"
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? 'black'
                : '#434343',
            fontSize: '10em',
            paddingBottom: '1rem',
            paddingTop: '1rem',
            textAlign: 'center',
            textShadow:
              localStorage.getItem('lightMode') === 'true'
                ? '1px 1px 1px indigo'
                : '1px 1px 1px whitesmoke',
          }}
        >
          Resume
        </h1>
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
            <p>
              <Tooltip
                content="download today!"
                target="#resume-download"
                position="top"
              />
              <NavLink
                id="resume-download"
                target={'blank'}
                to={'/01CJsSWEPortfolioResume.pdf'}
              >
                <i className="fa fa-file-pdf" />
                &nbsp; Download PDF &nbsp;
                <i className="fa fa-file-pdf" />
              </NavLink>
            </p>
          </span>
        </Document>
      </div>
    </div>
  );
};

export default Resume;
