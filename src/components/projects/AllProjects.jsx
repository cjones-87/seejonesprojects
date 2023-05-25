import React, { Suspense, useEffect } from 'react';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import ProjectSlideshow from './ProjectSlideshow';
import Spinner from '../../../misc/Spinner';
import {
  header,
  footer,
  projects,
  ratingBodyTemplate,
} from './data/ProjectData';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProjectData } from './data/ProjectData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectsCSS/Projects.css';
import './ProjectsCSS/ProjectSlideshow.css';

const AllProjects = () => {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    const navigateToLearningJournal = document.getElementById(
      'navigateToLearningJournal'
    );

    const handleNavigationToLearningJournal = () =>
      (window.location.pathname = '/learningjournal');

    navigateToLearningJournal.addEventListener(
      'click',
      handleNavigationToLearningJournal
    );
  });

  const imageBodyTemplate = (rowData) => {
    return (
      <>
        {rowData.iframe ? (
          <div>
            <Suspense fallback={<Spinner />}>
              <iframe
                allow="autoplay"
                className={'project-image'}
                height={height / 10}
                onError={handleImageFailure}
                src={rowData.iframe}
                style={{
                  backgroundColor: '#cccccc',
                  border: 0,
                  borderRadius: 25,
                  padding: '5px',
                }}
                width={width / 10}
              />
            </Suspense>
          </div>
        ) : (
          <LazyLoadImage
            alt={rowData.image}
            className={'project-image'}
            effect="blur"
            height={height / 10}
            onError={handleImageFailure}
            src={rowData.image}
            style={{
              backgroundColor: '#cccccc',
              borderRadius: 25,
              padding: '5px',
            }}
            width={width / 10}
          />
        )}
      </>
    );
  };

  return (
    <div
      className="datatable-project"
      style={{
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        color:
          localStorage.getItem('lightMode') === 'true'
            ? 'whitesmoke'
            : '#ba68c8',
        textShadow: '2px 2px 2px indigo',
        paddingTop: '1rem',
        width: width,
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <ProjectSlideshow slides={ProjectData} />
      </div>
      <div>
        <DataTable
          value={projects}
          header={header}
          footer={footer}
          responsiveLayout="scroll"
        >
          <Column
            field="name"
            header="Title"
            style={{
              background:
                localStorage.getItem('lightMode') === 'true'
                  ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                  : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color:
                localStorage.getItem('lightMode') === 'true'
                  ? 'whitesmoke'
                  : '#ba68c8',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            header="Image"
            body={imageBodyTemplate}
            style={{
              background:
                localStorage.getItem('lightMode') === 'true'
                  ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                  : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color:
                localStorage.getItem('lightMode') === 'true'
                  ? 'whitesmoke'
                  : '#ba68c8',
              paddingRight: '4rem',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field="category"
            header="Category"
            style={{
              background:
                localStorage.getItem('lightMode') === 'true'
                  ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                  : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color:
                localStorage.getItem('lightMode') === 'true'
                  ? 'whitesmoke'
                  : '#ba68c8',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field="rating"
            header="Difficulty Level"
            body={ratingBodyTemplate}
            style={{
              background:
                localStorage.getItem('lightMode') === 'true'
                  ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                  : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color:
                localStorage.getItem('lightMode') === 'true'
                  ? 'whitesmoke'
                  : '#ba68c8',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AllProjects;
