import React from 'react';

import Iframe from 'react-iframe';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';
import HypnotiqPic from './photos/Hypnotiq.gif';

import { FaMobileAlt, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { SiCss3, SiExpo, SiHeroku } from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

export default class Hypnotiq extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = [
      {
        label: 'Hypnotiq',
        className: 'title',
        type: 'title',
        expanded: true,
        data: { name: this.label, avatar: HypnotiqPic },
        children: [
          {
            label: 'MVP Goal',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: HypnotiqPic },
            children: [
              {
                label: 'Minimum Viable Product',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p>
                        Hypnotiq is an app where users are presented with a list
                        of sound categories from which to choose their preferred
                        category. Once within a category they are able to make a
                        selection from different options within that sound
                        profile.
                      </p>{' '}
                      <p>
                        For each category users are also able to see a list of
                        facts: 5 related to each of the 5 senses, and an
                        additional random fact.
                      </p>{' '}
                      <p>
                        The idea behind Hypnotiq is to allow the user to be able
                        to play sounds of their choice to facilitate with their
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
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p>
                        One future plan for Hypnotiq is to create a new updated
                        version that is more inclusive of its customer base. I
                        would prefer to make the next version inclusive of more
                        music genres and include the aspects from Hypnotiq 1.0
                        as an additional feature in it's next release version.
                      </p>
                      <p>
                        I would also like to give users an option to create,
                        save, & share their playlists with other users.
                      </p>
                      <p>
                        My biggest goal for Hypnotiq is to allow users the
                        ability to comment on shared playlists. In addition to
                        comments on playlists, I would like to give users the
                        ability to message directly other users.
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
            data: { name: this.label, avatar: HypnotiqPic },
            children: [
              {
                label: 'Technologies',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
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
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p>Hypnotiq was constructed & designed using </p>
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
            data: { name: this.label, avatar: HypnotiqPic },
            children: [
              {
                label: 'Contributions',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p>
                        This mobile app was completed solely by me. Prior to
                        this project I had no experience with React Native Expo,
                        so this was a fun learning experience. With so many
                        companies and sites moving more & more towards mobile
                        access, I wanted to get my hands wet with an area of
                        technology that I'm passionate about and feel that all
                        of us need/use in our daily lives.
                      </p>
                      <p>
                        I really enjoyed the different ways that a mobile phone
                        navigates screens and displays data in comparison to a
                        web site or desktop app. Implementing features I was
                        interested felt more intuitive, as it was much easier to
                        conceptualize.
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
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p>
                        {' '}
                        One of the biggest challenges completing Hypnotiq was
                        not having had any prior experience building mobile apps
                        or working with React Native Expo.I didn't always
                        naturally know how to implement certain features.
                        However, with extensive researching and planning, I was
                        able to discern different methods to allow me to
                        implement my vision
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
              src={HypnotiqPic}
              onError={(event) => (event.target.src = { HypnotiqPic })}
              style={{ width: '100px' }}
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
          url="https://www.youtube.com/embed/uiMUlbcUJeU"
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
