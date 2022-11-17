import React from 'react';

import { HypnotiqPic } from '../../../photos/PhotoExports';

import { DiJavascript1 } from 'react-icons/di';

import { FaMobileAlt, FaReact } from 'react-icons/fa';

import { SiCss3, SiExpo, SiFirebase } from 'react-icons/si';

import { Tooltip } from 'primereact/tooltip';

const Hypnotiq2Data = [
  {
    label: 'Hypnotiq 2.0',
    className: 'title',
    type: 'title',
    expanded: true,
    data: { avatar: HypnotiqPic },
    children: [
      {
        label: 'MVP Goal',
        className: 'info',
        type: 'info',
        expanded: true,
        data: { avatar: HypnotiqPic },
        children: [
          {
            label: 'Minimum Viable Product',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: HypnotiqPic,
              info: (
                <div>
                  <p>
                    Hypnotiq 2.0 is a music player app. Users are able to
                    create, edit, & delete music playlists that persist through
                    app reloads. Music is loaded from a users local device
                    storage. Users are able to play, pause, skip
                    forward/backward in playlists and general library.
                  </p>
                  <p>
                    Hypnotiq 2.0, as the name indicates, is an updated version
                    of&nbsp;
                    <a
                      href="/projects/hypnotiq"
                      id="originalHypnotiq"
                      style={{
                        color:
                          localStorage.getItem('lightMode') === 'true'
                            ? '#fbcce7'
                            : 'whitesmoke',
                        textDecoration: 'none',
                      }}
                    >
                      Hypnotiq
                    </a>
                    <Tooltip
                      content="View original Hypnotiq project here"
                      target="#originalHypnotiq"
                      mouseTrack
                      mouseTrackLeft={10}
                    />
                    . Users can also stream audio to assist them with their
                    sleep and study patterns.
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
              avatar: HypnotiqPic,
              info: (
                <div>
                  <p>
                    One plan during the next future iteration will be to change
                    the database structure. I ran into some challenges while
                    interacting with my chosen database structure that would
                    have been mediated by a different design structure.
                  </p>
                  <p>
                    I would also like to give users an option share their
                    playlists with other users. Users would also be able to
                    comment on shared playlists.
                  </p>
                  <p>
                    Another big goal for the next iteration will be to allow
                    users the ability to direct message other users. This
                    feature will most likely only be available to artists whos
                    work has been shared, as well as admins.
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
        data: { avatar: HypnotiqPic },
        children: [
          {
            label: 'Technologies',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: HypnotiqPic,
              info: (
                <span>
                  <span>
                    <DiJavascript1 />
                    &nbsp;&nbsp;&nbsp;
                    <FaReact />
                    &nbsp;&nbsp;&nbsp;
                    <FaMobileAlt />
                    &nbsp;&nbsp;&nbsp;
                    <SiExpo />
                    &nbsp;&nbsp;&nbsp;
                    <SiCss3 />
                    &nbsp;&nbsp;&nbsp;
                    <SiFirebase />
                    &nbsp;&nbsp;&nbsp;
                    <img
                      src="https://img.icons8.com/color/2x/cloud-firestore.png"
                      alt="firestore"
                      height={'15rem'}
                      width={'15rem'}
                    />
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
              avatar: HypnotiqPic,
              info: (
                <div>
                  <p>
                    Hypnotiq was constructed & designed using&nbsp;&nbsp;&nbsp;
                    <DiJavascript1 />
                    &nbsp;&nbsp;&nbsp;
                    <FaReact />
                    &nbsp;&nbsp;&nbsp;
                    <FaMobileAlt />
                    &nbsp;&nbsp;&nbsp;
                    <SiExpo />
                    &nbsp;&nbsp;&nbsp;for the front-end &&nbsp;&nbsp;&nbsp;
                    <SiFirebase />
                    &nbsp;&nbsp;&nbsp;
                    <img
                      src="https://img.icons8.com/color/2x/cloud-firestore.png"
                      alt="firestore"
                      height={'15rem'}
                      width={'15rem'}
                    />
                    &nbsp;&nbsp;&nbsp; for the back-end.
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
        data: { avatar: HypnotiqPic },
        children: [
          {
            label: 'Contributions',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: HypnotiqPic,
              info: (
                <div>
                  <p>
                    This mobile app was completed solely by me. It is a second
                    adaptation of&nbsp;
                    <a
                      href="/projects/hypnotiq"
                      id="originalHypnotiq"
                      style={{
                        color:
                          localStorage.getItem('lightMode') === 'true'
                            ? '#fbcce7'
                            : 'whitesmoke',
                        textDecoration: 'none',
                      }}
                    >
                      Hypnotiq.
                    </a>
                    <Tooltip
                      content="View original Hypnotiq project here"
                      target="#originalHypnotiq"
                      mouseTrack
                      mouseTrackLeft={10}
                    />
                    &nbsp;I was able to implement some of the stretch goals from
                    &nbsp;
                    <a
                      href="/projects/hypnotiq"
                      id="originalHypnotiq"
                      style={{
                        color:
                          localStorage.getItem('lightMode') === 'true'
                            ? '#fbcce7'
                            : 'whitesmoke',
                        textDecoration: 'none',
                      }}
                    >
                      Hypnotiq.
                    </a>
                    <Tooltip
                      content="View original Hypnotiq project here"
                      target="#originalHypnotiq"
                      mouseTrack
                      mouseTrackLeft={10}
                    />
                  </p>
                  <p>
                    Users are now presented with audio from different genres in
                    addition to audio that aids in their sleep/study patterns.
                    They are now able to create and manage personal playlists.
                  </p>
                  <p>
                    I learned that playing music audio is not as simple a
                    process as I imagined it to be. In order to achieve seamless
                    audio playback and allow users complete control of playback
                    state, I had to keep track of multiple factors, such as was:
                    {'\n'}
                    <ul>
                      <li>audio loaded</li>
                      <li>audio currently playing</li>
                      <li>from playlist or general library</li>
                    </ul>
                    etc, etc.
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
              avatar: HypnotiqPic,
              info: (
                <div>
                  <p></p>
                </div>
              ),
            },
          },
        ],
      },
    ],
  },
];

export default Hypnotiq2Data;
