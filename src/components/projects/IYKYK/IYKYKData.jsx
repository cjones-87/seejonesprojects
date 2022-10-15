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
                    A multiple choice quiz game where users choose their
                    preference from a menu of quiz categories. Each game hax 10
                    questions each with an answer bank. Questions and answers
                    are fetched from an external api then formatted to meet the
                    design of the game.
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
                    Future goals for this game include adding additional quiz
                    topics and types; I would like to diversify the categories
                    and add true/false questions. I also plan to implement
                    multi-nested menus & submenus in the navigation bar.
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
                    This website was created solely by me. I had fun learning
                    and implementing <SiTypescript /> as I completed this
                    project. The syntactic sugar that it provided came in a lot
                    of handy when debugging each error that occurred.
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
