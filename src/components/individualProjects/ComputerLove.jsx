import React from 'react';

import Iframe from 'react-iframe';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';

import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiHeroku,
  SiPostgresql,
  SiSequelize,
  SiRedux,
} from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

import {
  ComputerLovePic,
  activityScreen,
  homeScreen,
  loginScreen,
  likeScreen,
  meetScreen,
  registrationScreen,
  imageNotFound,
} from '../../photos/PhotoExports';

export default class ComputerLove extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = [
      {
        label: 'Computer Love',
        className: 'title',
        type: 'title',
        expanded: true,
        data: { name: this.label, avatar: ComputerLovePic },
        children: [
          {
            label: 'MVP Goal',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: loginScreen },
            children: [
              {
                label: 'Minimum Viable Product',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: registrationScreen,
                  info: (
                    <div>
                      <p>
                        Computer Love is a platform for users to be able to
                        register/login for dating/networking, and view profiles
                        of other users. A user would be able to swipe yes or no
                        to dating/networking based on their preference
                      </p>{' '}
                      <p>
                        This app was designed for users in the tech industry. A
                        lot of times, we spend so much time stuck behind our
                        computers and phones, that it can be hard to meet others
                        to date or network. Computer Love is designed to make it
                        as easy as swiping your screen.
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
                  name: this.label,
                  avatar: likeScreen,
                  info: (
                    <div>
                      <p>
                        Future plans for Computer Love include users being able
                        to deactivate/reactivate their account at their leisure,
                        as well as report other users for inappropriate
                        behavior.
                      </p>
                      <p>
                        More future plans would include users being able to add
                        multiple photos and matching other users based on
                        location.
                      </p>
                      <p>
                        {/* user should be able to see
                        their view count and match count A user should be able to
                        send/receive messages A user should be able to receive
                        push notifications This includes sign up notifications A
                        user should be able to view an Activity Feed The
                        activity feed includes users who have liked him/her,
                        users who have viewed his/her profile */}
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
            data: { name: this.label, avatar: homeScreen },
            children: [
              {
                label: 'Technologies',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: meetScreen,
                  info: (
                    <span>
                      <FaReact />
                      &nbsp;&nbsp;&nbsp;
                      <FaMobileAlt />
                      &nbsp;&nbsp;&nbsp;
                      <SiExpo />
                      &nbsp;&nbsp;&nbsp;
                      <DiJavascript1 />
                      &nbsp;&nbsp;&nbsp;
                      <FaNodeJs />
                      &nbsp;&nbsp;&nbsp;
                      <SiPostgresql />
                      &nbsp;&nbsp;&nbsp;
                      <SiSequelize />
                      &nbsp;&nbsp;&nbsp;
                      <SiRedux />
                      &nbsp;&nbsp;&nbsp;
                      <SiExpress />
                      &nbsp;&nbsp;&nbsp;
                      <SiHeroku />
                      &nbsp;&nbsp;&nbsp;
                      <SiCss3 />
                      &nbsp;&nbsp;&nbsp; Bcrypt&nbsp;&nbsp;&nbsp;JWT
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
                  name: this.label,
                  avatar: activityScreen,
                  info: (
                    <div>
                      <p>
                        Computer Love was constructed & designed using{' '}
                        <FaReact />
                        &nbsp;&nbsp;&nbsp;
                        <FaMobileAlt />
                        &nbsp;&nbsp;&nbsp;
                        <SiExpo />
                        &nbsp;&nbsp;&nbsp;for the front-end &&nbsp;&nbsp;&nbsp;
                        <FaNodeJs />
                        &nbsp;&nbsp;&nbsp;
                        <SiPostgresql />
                        &nbsp;&nbsp;&nbsp;
                        <SiSequelize />
                        &nbsp;&nbsp;&nbsp;
                        <SiRedux />
                        &nbsp;&nbsp;&nbsp;
                        <SiExpress />
                        &nbsp;&nbsp;&nbsp;for the back-end.
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
            data: { name: this.label, avatar: likeScreen },
            children: [
              {
                label: 'Contributions',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: ComputerLovePic,
                  info: (
                    <div>
                      <p>
                        This mobile app was a collaborative group project
                        completed by myself and three other software engineers.
                        One of my contributions was to build and construct the
                        React Native Expo PERN we used. Using the design
                        template my team cape up with, I built the inital
                        back-end & front-end as separate repos.
                      </p>
                      <p>
                        Another major feature I contributed, was the user
                        matching/swiping logic & implementation. This part was
                        not as intuitive as I would have liked for it to be. It
                        took extensive research to understand that I needed more
                        of a rotational Axis approach. I had a lot of fun
                        figuring out how to manipulate user profiles and data in
                        a more 3 dimensional way.
                      </p>
                      <p>
                        I was also responsible for the setup and configuration
                        of a users app flow. I used a combination of stack and
                        custom tab navigation to employ smooth transitions for
                        ease of navigation.
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
                  name: this.label,
                  avatar: ComputerLovePic,
                  info: (
                    <div>
                      <p>
                        One of my biggest challenges was understanding &
                        applying the logic necessary for swiping through users.
                        I struggled a bit with this at first because i was
                        thinking of the swipes in a two dimensional sense. After
                        thorough research I realized i needed to think of the
                        swiping motions as rotational interpolation in a three
                        dimensional sense.{' '}
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

    this.nodeTemplate = this.nodeTemplate.bind(this);
  }

  nodeTemplate(node) {
    if (node.type) {
      return (
        <div>
          <div className="node-header">{node.label}</div>
          <div className="node-content" style={{ margin: 5 }}>
            <div>{node.data.name}</div>
            <img
              alt={node.data.avatar}
              src={node.data.avatar}
              onError={(event) => (event.target.src = { imageNotFound })}
              style={{ width: '75px', height: '100px' }}
            />
            <div style={{ color: 'rebeccapurple' }}>{node.data.info}</div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Iframe
          url="https://www.youtube.com/embed/fmAzDaepIsM"
          width="800px"
          height="800px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
        <OrganizationChart
          value={this.orgChart}
          nodeTemplate={this.nodeTemplate}
          selection={this.state.selection}
          selectionMode="multiple"
          onSelectionChange={(event) =>
            this.setState({ selection: event.data })
          }
        />
      </div>
    );
  }
}
