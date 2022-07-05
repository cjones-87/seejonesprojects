import React from 'react';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';

import home from './photos/BoundzBookstore/home.png';
import browseBooks from './photos/BoundzBookstore/browseBooks.png';
import editBooks from './photos/BoundzBookstore/editBooks.png';
import viewUser from './photos/BoundzBookstore/viewUser.png';
import shoppingCart from './photos/BoundzBookstore/shoppingCart.png';
import checkout1 from './photos/BoundzBookstore/checkout1.png';
import checkout2 from './photos/BoundzBookstore/checkout2.png';
import imageNotFound from './photos/imageNotFound.jpeg';

import { FaNodeJs, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import {
  SiCss3,
  SiExpress,
  SiHeroku,
  SiMaterialui,
  SiPostgresql,
  SiRedux,
  SiSequelize,
} from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

export default class BoundzBookstore extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = [
      {
        label: 'Boundz Bookstore',
        className: 'title',
        type: 'title',
        expanded: true,
        data: { name: this.label, avatar: home },
        children: [
          {
            label: 'MVP Goal',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: browseBooks },
            children: [
              {
                label: 'Minimum Viable Product',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: shoppingCart,
                  info: (
                    <div>
                      <p>
                        Boundz Bookstore is a parody of Borders Bookstore. Our
                        goal was to create an eCommerce bookstore where users &
                        administrators would be able to checkout as a guest or
                        with a registered account to make purchases. We strove
                        to make their cart persistent whether a user was logged
                        in not. We also protected all routes so that users would
                        only be able to view/modify their own personal account
                        purchase info. Administrators would have access to all
                        user info & order history.
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
                  avatar: viewUser,
                  info: (
                    <div>
                      <p>
                        Future goals for Boundz Bookstore would be to update the
                        UI for an improved UX experience. We would also like to
                        increase an admins modification abilities.
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
            data: { name: this.label, avatar: home },
            children: [
              {
                label: 'Technologies',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: checkout1,
                  info: (
                    <span>
                      <DiJavascript1 />
                      &nbsp;&nbsp;&nbsp;
                      <FaNodeJs />
                      &nbsp;&nbsp;&nbsp;
                      <FaReact />
                      &nbsp;&nbsp;&nbsp;
                      <SiRedux />
                      &nbsp;&nbsp;&nbsp;
                      <SiPostgresql />
                      &nbsp;&nbsp;&nbsp;
                      <SiSequelize />
                      &nbsp;&nbsp;&nbsp;
                      <SiMaterialui />
                      &nbsp;&nbsp;&nbsp;
                      <SiExpress />
                      &nbsp;&nbsp;&nbsp;
                      <SiHeroku />
                      &nbsp;&nbsp;&nbsp;
                      <ImHtmlFive />
                      &nbsp;&nbsp;&nbsp;
                      <SiCss3 />
                      &nbsp;&nbsp;&nbsp;Bcrypt&nbsp;&nbsp;&nbsp;JWT
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
                  avatar: checkout2,
                  info: (
                    <div>
                      <p>
                        Boundz Bookstore was constructed & designed
                        using&nbsp;&nbsp;&nbsp;
                        <FaReact />
                        &nbsp;&nbsp;&nbsp;
                        <SiRedux />
                        &nbsp;&nbsp;&nbsp;
                        <SiMaterialui />
                        &nbsp;&nbsp;&nbsp;
                        <ImHtmlFive />
                        &nbsp;&nbsp;&nbsp;
                        <SiCss3 />
                        &nbsp;&nbsp;&nbsp;for the front-end & <FaNodeJs />
                        &nbsp;&nbsp;&nbsp; <SiPostgresql />
                        &nbsp;&nbsp;&nbsp;
                        <SiSequelize />
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
            data: { name: this.label, avatar: editBooks },
            children: [
              {
                label: 'Contributions',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: browseBooks,
                  info: (
                    <div>
                      <p>
                        My contributions to Boundz Bookstore included
                        constructing & designing the all products view, as well
                        the site's home page.
                      </p>
                      <p>
                        I was also responsible for orchestrating user/admin
                        dashboard menus and their respective authorized site
                        navigation access.
                      </p>
                      <p>
                        Lastly i was responsible for engineering new user
                        registration functionality as well as user/admin account
                        CRUD abilities
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
                  avatar: home,
                  info: (
                    <div>
                      <p>
                        One of the biggest challenges was learning how to
                        protect routes to only give users access to their own
                        personal accounts, while also giving admins complete
                        access their personal accounts, as well as the accounts
                        of all other users.
                      </p>
                      <p>
                        Another big struggle was creating a separate view for
                        admins to support the additional functionality they
                        need.
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
      <OrganizationChart
        value={this.orgChart}
        nodeTemplate={this.nodeTemplate}
        selection={this.state.selection}
        selectionMode="multiple"
        onSelectionChange={(event) => this.setState({ selection: event.data })}
      />
    );
  }
}
