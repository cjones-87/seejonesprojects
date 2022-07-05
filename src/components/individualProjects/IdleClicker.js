import React from 'react';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';
import IdleClickerPic from './photos/IdleClicker.png';
import imageNotFound from './photos/imageNotFound.jpeg';

import { FaNodeJs, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { SiCss3 } from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

export default class IdleClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = [
      {
        label: 'IdleClicker',
        className: 'title',
        type: 'title',
        expanded: true,
        data: { name: this.label, avatar: IdleClickerPic },
        children: [
          {
            label: 'MVP Goal',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: IdleClickerPic },
            children: [
              {
                label: 'Minimum Viable Product',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: IdleClickerPic,
                  info: (
                    <div>
                      <p>
                        Players click a coffee emoji, incrementing a counter
                        that shows the current quantity of coffee in their
                        possession. Coffee is used to purchase coffee-producing
                        devices, such as percolators and espresso machines. Each
                        second, the player will passively accumulate coffee
                        proportionate to the amount and type of coffee producers
                        in stock.{' '}
                      </p>{' '}
                      <p>
                        The price (in coffee) of each producer steadily
                        increases, enabling the game to remain interesting even
                        after coffee production has been automated. Players must
                        choose purchases wisely to receive the most ‘Bang for
                        their buck’.
                      </p>{' '}
                      <p>
                        The player will be able to see: current coffee count, y
                        the game. Producers will only be unlocked successively
                        as the player accumulates more coffee.
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
                  avatar: IdleClickerPic,
                  info: (
                    <div>
                      <p>
                        One future plan for this idle clicker game is to
                        incorporate the ability to save data. A player would
                        then be able to pause progress, and return to gameplay
                        at a later time.
                      </p>
                      <p>
                        Another goal is to eventually add the ability to be able
                        to sell back producers for a portion of their original
                        cost.
                      </p>
                      <p>
                        Probably my biggest goal for idle clicker 2.0 is going
                        to be the addition of unlockable upgrade systems, and
                        producer/production multipliers.
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
            data: { name: this.label, avatar: IdleClickerPic },
            children: [
              {
                label: 'Technologies',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: IdleClickerPic,
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
                  name: this.label,
                  avatar: IdleClickerPic,
                  info: (
                    <div>
                      <p>
                        Idle Clicker was constructed & designed using{' '}
                        <ImHtmlFive /> & <SiCss3 />. The logic and data for
                        gameplay was implemented using client-side{' '}
                        <DiJavascript1 />.
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
            data: { name: this.label, avatar: IdleClickerPic },
            children: [
              {
                label: 'Contributions',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: IdleClickerPic,
                  info: (
                    <div>
                      <p>
                        {' '}
                        This idle clicker game was completed solely by me. It
                        was completed during the early days of understanding of
                        DOM manipulation. This project provided an excellent
                        understanding of how to make a website dynamic. It was
                        an enlightening endeavor, that I'm glad I undertook, as
                        it paved the way for truly understanding some of the
                        intricacies of <FaReact />.{' '}
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
                  avatar: IdleClickerPic,
                  info: (
                    <div>
                      <p>
                        The biggest challenge i faced in completing this idle
                        clicker game, was understanding how to update a page
                        dynamically in real time. Once I broke through that
                        barrier, it was smooth sailing.
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
        <div className="containerDiv">
          <div className="node-header">{node.label}</div>
          <div className="node-content" style={{ margin: 5 }}>
            <div>{node.data.name}</div>
            <img
              alt={node.data.avatar}
              src={node.data.avatar}
              onError={(event) => (event.target.src = { imageNotFound })}
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
      <div className="containersContainerDiv">
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
