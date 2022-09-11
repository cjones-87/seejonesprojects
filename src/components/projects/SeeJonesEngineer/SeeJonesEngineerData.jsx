import React from "react";

import {
  seeJonesEngineer,
  aboutMe,
  landingPage,
  projects,
  learningJournal,
  interactiveGames,
  contactForm,
} from "../../../photos/PhotoExports";

import { FaReact } from "react-icons/fa";

import { ImHtmlFive } from "react-icons/im";

import { SiCss3, SiNetlify } from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";

const SeeJonesEngineerData = [
  {
    label: "seejonesengineer.com",
    className: "title",
    type: "title",
    expanded: true,
    data: { avatar: seeJonesEngineer },
    children: [
      {
        label: "MVP Goal",
        className: "info",
        type: "info",
        expanded: true,
        data: { avatar: landingPage },
        children: [
          {
            label: "Minimum Viable Product",
            className: "moreInfo",
            type: "moreInfo",
            expanded: false,
            data: {
              avatar: contactForm,
              info: (
                <div>
                  <p>
                    The goal of this portfolio is to provide current & future
                    clients, companies, businesses, artist, & individuals with a
                    showcase of my talents and personal work. Current &
                    potential clients & employers are able peruse my works and
                    reach out to schedule meetings/work.
                  </p>
                </div>
              ),
            },
          },
          {
            label: "Stretch Goals",
            className: "moreInfo",
            type: "moreInfo",
            expanded: true,
            data: {
              avatar: projects,
              info: (
                <div>
                  <p>
                    Future goals for this site include continued monthly updates
                    as well reworking the UI to make it more accessible for all.
                    I would also like to add some 3-dimensional work in the
                    future.
                  </p>
                </div>
              ),
            },
          },
        ],
      },
      {
        label: "Tech Stack",
        className: "info",
        type: "info",
        expanded: true,
        data: { avatar: learningJournal },
        children: [
          {
            label: "Technologies",
            className: "moreInfo",
            type: "moreInfo",
            expanded: false,
            data: {
              avatar: landingPage,
              info: (
                <span>
                  <DiJavascript1 />
                  &nbsp;&nbsp;&nbsp;
                  <FaReact />
                  &nbsp;&nbsp;&nbsp;
                  <ImHtmlFive />
                  &nbsp;&nbsp;&nbsp;
                  <SiCss3 />
                  &nbsp;&nbsp;&nbsp;
                  <i className="pi pi-prime" style={{ fontSize: "1em" }} />
                  &nbsp;&nbsp;&nbsp;
                  <SiNetlify />
                </span>
              ),
            },
          },
          {
            label: "Integration",
            className: "moreInfo",
            type: "moreInfo",
            expanded: true,
            data: {
              avatar: seeJonesEngineer,
              info: (
                <div>
                  <p>
                    seejonesengineer.com's front end was constructed & designed
                    using&nbsp;&nbsp;&nbsp;
                    <DiJavascript1 />
                    &nbsp;&nbsp;&nbsp;
                    <FaReact />
                    &nbsp;&nbsp;&nbsp;
                    <ImHtmlFive />
                    &nbsp;&nbsp;&nbsp;
                    <SiCss3 />
                    &nbsp;&nbsp;&nbsp;
                    <i className="pi pi-prime" style={{ fontSize: "1em" }} />
                    &nbsp;&nbsp;&nbsp;
                    <SiNetlify />
                  </p>
                </div>
              ),
            },
          },
        ],
      },
      {
        label: "Implementations",
        className: "info",
        type: "info",
        expanded: true,
        data: { avatar: projects },
        children: [
          {
            label: "Contributions",
            className: "moreInfo",
            type: "moreInfo",
            expanded: false,
            data: {
              avatar: aboutMe,
              info: (
                <div>
                  <p>
                    This portfolio site was created solely by me. I used a
                    combination of <SiCss3 />
                    &nbsp;&&nbsp;
                    <i className="pi pi-prime" style={{ fontSize: "1em" }} />
                    &nbsp; to illustrate & enhance the UI/UX.
                  </p>
                </div>
              ),
            },
          },
          {
            label: "Challenges",
            className: "moreInfo",
            type: "moreInfo",
            expanded: true,
            data: {
              avatar: interactiveGames,
              info: (
                <div>
                  <p>
                    The biggest challenge I ran into came early on in the
                    development of this portfolio site. I ran into a bit of a
                    stumbling block at first with routing internal pages to
                    different routes. Even though I had routed pages a thousand
                    times before, it took a deep dive of the internet for me to
                    realize and understand how important it is to stay up on
                    current documentation. I also learned a lesson on being
                    explicitly specific concerning versions when searching for
                    errors. A recent change in documentation removed some higher
                    order components & basic internet searches would only return
                    the previous versions of documentation. This initial
                    struggle led to a vast improvement in my researching and
                    debugging skills, as well as my overall internet search
                    efficacy.
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

export default SeeJonesEngineerData;
