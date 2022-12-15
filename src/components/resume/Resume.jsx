import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { Tooltip } from 'primereact/tooltip';

import PDF from '../../CJsSoftwareEngineeringResume.pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(pageNumber);
  };

  return (
    <div style={{ width: dimensions.width }}>
      <div
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-20 card'
            : 'bg-black-alpha-90 card'
        }
      >
        <h1
          style={{
            color: 'rebeccapurple',
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
        <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            height={dimensions.height}
            pageNumber={pageNumber}
            width={dimensions.width}
          />
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
              <NavLink id="resume-download" target={'blank'} to={PDF}>
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
