import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import React, { Component } from 'react';
import { Card } from 'primereact/card';

export default class AboutMe extends Component {
  render() {
    const header = (
      <img
        alt="Card"
        src="images/usercard.png"
        onError={(e) =>
          (e.target.src =
            'https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')
        }
      />
    );

    return (
      <div>
        <Card
          title="The Man"
          subTitle="Subtitle"
          style={{ width: '25em', marginBottom: '2em' }}
          header={header}
        >
          <p className="m-0" style={{ lineHeight: '1.5' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card
          title="The Legend"
          subTitle="Subtitle"
          style={{ width: '25em' }}
          header={header}
        >
          <p className="m-0" style={{ lineHeight: '1.5' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    );
  }
}
