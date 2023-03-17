import React from 'react';
import {
  BabyJams,
  BabyFacts,
  ClassicalJams,
  ClassicalFacts,
  JazzJams,
  JazzFacts,
  BrownNoise,
  BrownFacts,
  MainMenu,
} from '../../../photos/PhotoExports';
import { FaMobileAlt, FaReact } from 'react-icons/fa';
import { SiCss3, SiExpo, SiHeroku } from 'react-icons/si';

const HypnotiqData = [
  {
    label: 'Hypnotiq',
    className: 'title',
    type: 'title',
    expanded: true,
    data: { iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8' },
    children: [
      {
        label: 'MVP Goal',
        className: 'info',
        type: 'info',
        expanded: true,
        data: { avatar: MainMenu },
        children: [
          {
            label: 'Minimum Viable Product',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: JazzJams,
              info: (
                <div>
                  <p>
                    Hypnotiq is an app where users are presented with a list of
                    sound categories from which to choose their preferred
                    category. Once within a category they are able to make a
                    selection from different options within that sound profile.
                  </p>{' '}
                  <p>
                    For each category users are also able to see a list of
                    facts: 5 related to each of the 5 senses, and an additional
                    random fact.
                  </p>{' '}
                  <p>
                    The idea behind Hypnotiq is to allow the user to be able to
                    play sounds of their choice to facilitate with their
                    styudying/sleep habits.
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
              avatar: JazzFacts,
              info: (
                <div>
                  <p>
                    One future plan for Hypnotiq is to create a new updated
                    version that is more inclusive of its customer base. I would
                    prefer to make the next version inclusive of more music
                    genres and include the aspects from Hypnotiq 1.0 as an
                    additional feature in it's next release version.
                  </p>
                  <p>
                    I would also like to give users an option to create, save, &
                    share their playlists with other users.
                  </p>
                  <p>
                    My biggest goal for Hypnotiq is to allow users the ability
                    to comment on shared playlists. In addition to comments on
                    playlists, I would like to give users the ability to message
                    directly other users.
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
        data: { avatar: BabyJams },
        children: [
          {
            label: 'Technologies',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: BrownNoise,
              info: (
                <span>
                  <span>
                    <FaReact />
                    &nbsp;&nbsp;&nbsp;
                    <FaMobileAlt />
                    &nbsp;&nbsp;&nbsp;
                    <SiExpo />
                    &nbsp;&nbsp;&nbsp;
                    <SiCss3 />
                    &nbsp;&nbsp;&nbsp;
                    <SiHeroku />
                  </span>
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
              avatar: BrownFacts,
              info: (
                <div>
                  <p>
                    Hypnotiq was constructed & designed using&nbsp;&nbsp;&nbsp;
                    <FaReact />
                    &nbsp;&nbsp;&nbsp;
                    <FaMobileAlt />
                    &nbsp;&nbsp;&nbsp;
                    <SiExpo />
                    &nbsp;&nbsp;&nbsp;for the front-end.
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
        data: { avatar: BabyFacts },
        children: [
          {
            label: 'Contributions',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: ClassicalJams,
              info: (
                <div>
                  <p>
                    This mobile app was completed solely by me. Prior to this
                    project I had no experience with React Native Expo, so this
                    was a fun learning experience. With so many companies and
                    sites moving more & more towards mobile access, I wanted to
                    get my hands wet with an area of technology that I'm
                    passionate about and feel that all of us need/use in our
                    daily lives.
                  </p>
                  <p>
                    I really enjoyed the different ways that a mobile phone
                    navigates screens and displays data in comparison to a web
                    site or desktop app. Implementing mobile features felt more
                    intuitive, as it was much easier to conceptualize.
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
              avatar: ClassicalFacts,
              info: (
                <div>
                  <p>
                    One of the biggest challenges completing Hypnotiq was not
                    having had any prior experience building mobile apps or
                    working with React Native Expo.I didn't always naturally
                    know how to implement certain features. However, with
                    extensive researching and planning, I was able to discern
                    different methods to allow me to implement my vision
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

export default HypnotiqData;
