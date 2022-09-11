import React from 'react';

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

import {
  home,
  browseBooks,
  editBooks,
  viewUser,
  shoppingCart,
  checkout1,
  checkout2,
} from '../../../photos/PhotoExports';

const BoundzBookstoreData = [
  {
    label: 'Boundz Bookstore',
    className: 'title',
    type: 'title',
    expanded: true,
    data: { avatar: home },
    children: [
      {
        label: 'MVP Goal',
        className: 'info',
        type: 'info',
        expanded: true,
        data: { avatar: browseBooks },
        children: [
          {
            label: 'Minimum Viable Product',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: shoppingCart,
              info: (
                <div>
                  <p>
                    Boundz Bookstore is a parody of Borders Bookstore. Our goal
                    was to create an eCommerce bookstore where users &
                    administrators would be able to checkout as a guest or with
                    a registered account to make purchases. We strove to make
                    their cart persistent whether a user was logged in not. We
                    also protected all routes so that users would only be able
                    to view/modify their own personal account purchase info.
                    Administrators would have access to all user info & order
                    history.
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
              avatar: viewUser,
              info: (
                <div>
                  <p>
                    Future goals for Boundz Bookstore would be to update the UI
                    for an improved UX experience. We would also like to
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
        data: { avatar: home },
        children: [
          {
            label: 'Technologies',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
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
        data: { avatar: editBooks },
        children: [
          {
            label: 'Contributions',
            className: 'moreInfo',
            type: 'moreInfo',
            expanded: false,
            data: {
              avatar: browseBooks,
              info: (
                <div>
                  <p>
                    My contributions to Boundz Bookstore included constructing &
                    designing the all products view, as well the site's home
                    page.
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
              avatar: home,
              info: (
                <div>
                  <p>
                    One of the biggest challenges was learning how to protect
                    routes to only give users access to their own personal
                    accounts, while also giving admins complete access their
                    personal accounts, as well as the accounts of all other
                    users.
                  </p>
                  <p>
                    Another big struggle was creating a separate view for admins
                    to support the additional functionality they need.
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

export default BoundzBookstoreData;
