import React from 'react';

import { GuessingGamePic } from '../../../photos/PhotoExports';

import { FaNodeJs } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { SiCss3 } from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

const GuessingGameData = [
  {
    label: 'Guessing Game',
    className: 'title',
    type: 'title',
    expanded: true,
    data: { avatar: GuessingGamePic },
    children: [
      {
        label: 'MVP Goal',
        className: 'info',
        type: 'info',
        expanded: true,
        data: { avatar: GuessingGamePic },
        children: [
          {
            label: 'Minimum Viable Product',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: GuessingGamePic,
              info: (
                <div>
                  <p>
                    Guessing Game was a simple "guessing game" in which the user
                    had limited guesses in which to guess a number between 1 &
                    100. It included a hint button to assist a user with
                    guessing, as well as a reset button to restart the game.
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
              avatar: GuessingGamePic,
              info: (
                <div>
                  <p>
                    There are no future goals for Guessing Game at this time.
                    Guessing Game was created mainly as an instructional
                    introduction into DOM manipulation.
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
        data: { avatar: GuessingGamePic },
        children: [
          {
            label: 'Technologies',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: GuessingGamePic,
              info: (
                <span>
                  <FaNodeJs />
                  &nbsp;&nbsp;&nbsp;
                  <ImHtmlFive />
                  &nbsp; &nbsp;&nbsp;
                  <SiCss3 />
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
              avatar: GuessingGamePic,
              info: (
                <div>
                  <p>
                    Guessing Game was constructed & designed using{' '}
                    <ImHtmlFive /> & <SiCss3 />. The logic and data for gameplay
                    was implemented using client-side <DiJavascript1 />.
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
        data: { avatar: GuessingGamePic },
        children: [
          {
            label: 'Contributions',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: GuessingGamePic,
              info: (
                <div>
                  <p>
                    This project was completed solely by my. It was my first
                    successful endeavour into DOM manipulation.
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
              avatar: GuessingGamePic,
              info: (
                <div>
                  <p>
                    This project was completed while studying DOM manipulation.
                    It was a bit challenging to manipulate the DOM while
                    learning how to manipulate it for the first time.
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
export default GuessingGameData;
