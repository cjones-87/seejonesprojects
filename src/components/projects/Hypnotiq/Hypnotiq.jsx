// import React from 'react';

// import Iframe from 'react-iframe';

// import { OrganizationChart } from 'primereact/organizationchart';

// import { imageNotFound } from '../../../photos/PhotoExports';

// import HypnotiqData from './HypnotiqData';

// export default class Hypnotiq extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       selection: [],
//     };

//     this.orgChart = HypnotiqData;

//     this.nodeTemplate = this.nodeTemplate.bind(this);
//   }

//   nodeTemplate(node) {
//     if (node.type) {
//       return (
//         <div
//           className={
//             localStorage.getItem('lightMode') === 'true'
//               ? 'bg-black-alpha-00'
//               : 'bg-black-alpha-90'
//           }
//           style={{
//             color:
//               localStorage.getItem('lightMode') === 'true'
//                 ? 'whitesmoke'
//                 : 'rebeccapurple',
//           }}
//         >
//           <div className="node-header">{node.label}</div>
//           <div className="node-content" style={{ margin: 5 }}>
//             <div>{node.data.name}</div>
//             <img
//               alt={node.data.avatar}
//               src={node.data.avatar}
//               onError={(event) => (event.target.src = { imageNotFound })}
//               style={{ width: '100px' }}
//             />
//             <div
//               style={{
//                 color:
//                   localStorage.getItem('lightMode') === 'true'
//                     ? 'whitesmoke'
//                     : 'rebeccapurple',
//               }}
//             >
//               {node.data.info}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

//   render() {
//     return (
//       <div style={{ textAlign: 'center', justifyContent: 'center' }}>
//         <Iframe
//           url="https://www.youtube.com/embed/JAFO_AROg34"
//           width="800px"
//           height="800px"
//           id="myId"
//           className="myClassname"
//           display="initial"
//           position="relative"
//           allowFullScreen
//         />
//         <OrganizationChart
//           className={
//             localStorage.getItem('lightMode') === 'true'
//               ? 'bg-black-alpha-20'
//               : 'bg-black-alpha-90'
//           }
//           nodeTemplate={this.nodeTemplate}
//           onSelectionChange={(event) =>
//             this.setState({ selection: event.data })
//           }
//           selection={this.state.selection}
//           selectionMode="multiple"
//           value={this.orgChart}
//         />
//       </div>
//     );
//   }
// }

import React, { useEffect, useState } from 'react';

import Iframe from 'react-iframe';

import { OrganizationChart } from 'primereact/organizationchart';

import { imageNotFound } from '../../../photos/PhotoExports';

import HypnotiqData from './HypnotiqData';

const Hypnotiq = () => {
  const [selection, setSelection] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const orgChart = HypnotiqData;

  const nodeTemplate = (node) => {
    if (node.type) {
      return (
        <div
          className={
            localStorage.getItem('lightMode') === 'true'
              ? 'bg-black-alpha-00'
              : 'bg-black-alpha-90'
          }
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? 'whitesmoke'
                : 'rebeccapurple',
            overflowWrap: 'anywhere',
            width: dimensions.width / 9,
          }}
        >
          <div className="node-header" style={{ fontSize: '1.5em' }}>
            {node.label}
          </div>
          <div className="node-content">
            <div>{node.data.name}</div>
            <img
              alt={node.data.avatar}
              src={node.data.avatar}
              onError={(event) => (event.target.src = { imageNotFound })}
              style={{ width: dimensions.width / 10 }}
            />
            <div
              style={{
                color:
                  localStorage.getItem('lightMode') === 'true'
                    ? 'whitesmoke'
                    : 'rebeccapurple',
              }}
            >
              {node.data.info}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20'
          : 'bg-black-alpha-90'
      }
      style={{
        alignItems: 'center',
        width: dimensions.width,
      }}
    >
      <div
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          width: dimensions.width + 20,
        }}
      >
        <Iframe
          url="https://www.youtube.com/embed/JAFO_AROg34"
          width={dimensions.width / 2}
          height={dimensions.height / 2}
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
        <OrganizationChart
          nodeTemplate={nodeTemplate}
          onSelectionChange={(event) => setSelection(event.data)}
          selection={selection}
          selectionMode="multiple"
          style={{ overflow: 'scroll' }}
          value={orgChart}
        />
      </div>
    </div>
  );
};

export default Hypnotiq;
