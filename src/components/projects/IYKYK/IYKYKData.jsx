import React from 'react';

import { IYKYK } from '../../../photos/PhotoExports';

import { FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { SiCss3, SiTypescript, SiVercel } from 'react-icons/si';

const IYKYKData = [
  {
    label: 'All I Know Is, IYKYK',
    className: 'title',
    type: 'title',
    expanded: true,
    data: { avatar: IYKYK },
    children: [
      {
        label: 'MVP Goal',
        className: 'info',
        type: 'info',
        expanded: true,
        data: { avatar: IYKYK },
        children: [
          {
            label: 'Minimum Viable Product',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: IYKYK,
              info: (
                <div>
                  <p>
                    A multiple choice quiz game. Users choose from a menu of
                    quiz categories based on their preference. Each game has 10
                    questions with 4 answers each, fetched from an external api,
                    then shuffled, formatted, & returned.
                  </p>
                </div>
              ),
            },
          },
          {
            label: 'Stretch Goals',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: true,
            data: {
              avatar: IYKYK,
              info: (
                <div>
                  <p>
                    Future goals for this game include adding additional topics
                    to expand the number of categories available. I would also
                    like to add true/false questions. Finally, I also plan to
                    implement multi-nested menus & submenus in the navigation
                    bar.
                  </p>
                </div>
              ),
            },
          },
        ],
      },
      {
        label: 'Tech Stack',
        className: 'info',
        type: 'info',
        expanded: true,
        data: { avatar: IYKYK },
        children: [
          {
            label: 'Technologies',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: IYKYK,
              info: (
                <span>
                  <SiTypescript />
                  &nbsp;&nbsp;&nbsp;
                  <FaReact />
                  &nbsp;&nbsp;&nbsp;
                  <ImHtmlFive />
                  &nbsp;&nbsp;&nbsp;
                  <SiCss3 />
                  &nbsp;&nbsp;&nbsp;
                  <SiVercel />
                </span>
              ),
            },
          },
          {
            label: 'Integration',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: true,
            data: {
              avatar: IYKYK,
              info: (
                <div>
                  <p>
                    IYKYK's front end was constructed & designed
                    using&nbsp;&nbsp;&nbsp;
                    <SiTypescript />
                    &nbsp;&nbsp;&nbsp;
                    <FaReact />
                    &nbsp;&nbsp;&nbsp;
                    <ImHtmlFive />
                    &nbsp;&nbsp;&nbsp;
                    <SiCss3 />
                    &nbsp;&nbsp;&nbsp;
                    <SiVercel />
                  </p>
                </div>
              ),
            },
          },
        ],
      },
      {
        label: 'Implementations',
        className: 'info',
        type: 'info',
        expanded: true,
        data: { avatar: IYKYK },
        children: [
          {
            label: 'Contributions',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: IYKYK,
              info: (
                <div>
                  <p>
                    This website was created solely by me. I used <SiCss3 /> to
                    illustrate & enhance the UI/UX.
                  </p>
                </div>
              ),
            },
          },
          {
            label: 'Challenges',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: true,
            data: {
              avatar: IYKYK,
              info: (
                <div>
                  <p>
                    It was a new experience to utilize Typescript for the first
                    time. Having never used it professionally before, I had fun
                    learning some of the intricacies of the language. The
                    syntatical sugar it provides was extremely helpful in
                    debugging.
                  </p>
                </div>
              ),
            },
          },
        ],
      },
    ],
  },
];

export default IYKYKData;
