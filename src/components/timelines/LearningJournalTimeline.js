import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.css';

import React, { Component } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Timeline.css';

export default class LearningJournalTimeline extends Component {
  constructor(props) {
    super(props);

    this.events1 = [
      {
        id: 6,
        status: 'See Jones Engineer',
        date: '2/2022',
        icon: 'pi pi-star',
        color: '#FF9800',
        image:
          'https://image.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      },
      {
        id: 5,
        status: 'Computer love',
        date: '01/2022',
        icon: 'pi pi-star',
        color: '#607D8B',
        image:
          'https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      },
      {
        id: 4,
        status: 'Hypnotiq',
        date: '01/2022',
        icon: 'pi pi-star',
        color: '#9C27B0',
        image:
          'https://image.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      },
      {
        id: 3,
        status: 'Graduated Fullstack Academy',
        date: '12/2021',
        icon: 'pi pi-star',
        color: '#673AB7',
        image:
          'https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      },
      {
        id: 2,
        status: 'Boundz eCommerce',
        date: '12/2021',
        icon: 'pi pi-star',
        color: '#FF9800',
        image:
          'https://image.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      },
      {
        id: 1,
        status: 'Enrolled Fullstack Academy',
        date: '06/2021',
        icon: 'pi pi-star',
        color: '#607D8B',
        image:
          'https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      },
    ];
  }

  render() {
    const customizedMarker = (item) => {
      return (
        <span
          className="custom-marker p-shadow-2"
          style={{ backgroundColor: item.color }}
        >
          <i className={item.icon}></i>
        </span>
      );
    };

    const customizedContent = (item) => {
      return (
        <Card title={item.status} subTitle={item.date}>
          {item.image && (
            <img
              src={item.image}
              onError={(e) =>
                (e.target.src =
                  'https://images.unsplash.com/photo-1611890798517-07b0fcb4a811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')
              }
              alt={item.name}
              width={200}
              className="p-shadow-2"
            />
          )}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
          <Button label="Read more" className="p-button-text"></Button>
        </Card>
      );
    };

    return (
      <div className="timeline-demo">
        <h2 style={{ textAlign: 'center' }}>Learning Journal</h2>
        <div className="card">
          <Timeline
            value={this.events1}
            align="alternate"
            className="customized-timeline"
            marker={customizedMarker}
            content={customizedContent}
          />
        </div>
      </div>
    );
  }
}
