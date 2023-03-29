import {
  home,
  browseBooks,
  shoppingCart,
  checkout1,
} from '../../../photos/PhotoExports';

const BoundzBookstoreData = [
  {
    alt: 'Boundz Bookstore Photo',
    img: home,
    paragraph: `I developed Boundz Bookstore, an eCommerce bookstore using JavaScript and technologies such as React, Redux, Node.js, PostgreSQL, Sequelize, Express, Material UI, HTML5, and CSS3. The Minimum Viable Product (MVP) allowed users and administrators to purchase books with or without a registered account. This site made use of a persistent cart feature and users could modify only their own purchase information. I also implemented administrative access to user information and order history.`,
  },
  {
    alt: 'Boundz Bookstore Photo',
    img: browseBooks,
    paragraph: `My contributions included designing the view for all products, constructing the site’s homepage, engineering new user registration functionality, and creating user and administrative account CRUD abilities. Additionally, I orchestrated user/admin dashboard menus and their respective authorized site navigation access.`,
  },
  {
    alt: 'Boundz Bookstore Photo',
    img: shoppingCart,
    paragraph: `A challenge I faced was protecting routes to ensure that only authorized access would be allowed. Administrators had complete access to personal accounts, as well as the accounts of all other users, while users could only access their own personal accounts. Another challenge was ensuring that the site was responsive and easy to use across a variety of devices.`,
  },
  {
    alt: 'Boundz Bookstore Photo',
    img: checkout1,
    paragraph: `Boundz Bookstore was constructed using React, Redux, Material UI, HTML5, and CSS3 for the frontend, and Node.js, PostgreSQL, Sequelize, and Express for the backend. The site is deployed on Heroku. Overall, Boundz Bookstore was a challenging but rewarding project that improved my skills in JavaScript technologies and web development.`,
  },
];

export default BoundzBookstoreData;
