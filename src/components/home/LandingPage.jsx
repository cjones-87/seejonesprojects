import React, { useEffect, useState } from 'react';

import * as THREE from 'three';

import * as POSTPROCESSING from 'postprocessing';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import './LandingPage.css';

import Typewriter from 'typewriter-effect';

import { Button } from 'primereact/button';

import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

import { DiJavascript1 } from 'react-icons/di';

import { ImHtmlFive } from 'react-icons/im';

import { SiCss3, SiExpo, SiRedux } from 'react-icons/si';

import OpenUp from '../../sounds/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../sounds/AccessGrantedComputerVoice.mp3';

import smoke from '../../photos/smoke.png';
import stars from '../../photos/stars.png';

const LandingPage = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const onClick = () => {
    setTimeout(() => (window.location.href = '/home'), 2000);
    const audio = new Audio(OpenUp);
    const audio2 = new Audio(AccessGrantedComputerVoice);
    let playAudio = () => {
      audio.play();
    };
    let playAudio2 = () => {
      setTimeout(() => audio2.play(), 500);
    };
    playAudio();
    playAudio2();
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      dimensions.width / dimensions.height,
      1,
      1000
    );

    let cloudParticles = [];

    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    let ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);

    let directionalLight = new THREE.DirectionalLight(0xbf40bf);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    let redLight = new THREE.PointLight(0xd8547e, 50, 450, 1.7);
    redLight.position.set(100, 300, 100);
    scene.add(redLight);

    let blueLight = new THREE.PointLight(0x3677ac, 50, 450, 1.7);
    blueLight.position.set(300, 300, 200);
    scene.add(blueLight);

    let purpleLight = new THREE.PointLight(0x800080, 50, 450, 1.7);
    purpleLight.position.set(400, 300, 300);
    scene.add(purpleLight);

    let renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      stencil: false,
      depth: false,
    });
    renderer.setSize(dimensions.width, dimensions.height);
    scene.fog =
      localStorage.getItem('lightMode') === 'true'
        ? new THREE.FogExp2(0x51414f, 0.0001)
        : new THREE.FogExp2(0xe0b0ff, 0.0001);
    renderer.setClearColor(scene.fog.color);
    document.getElementById('canvas').appendChild(renderer.domElement);

    let loader = new THREE.TextureLoader();

    loader.load(smoke, (texture) => {
      let cloudGeometry = new THREE.PlaneGeometry(500, 500);
      let cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
      });
      for (let p = 0; p < 69; p++) {
        let cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);

        cloud.position.set(
          Math.random() * 800 - 400,
          500,
          Math.random() * 500 - 500
        );

        cloud.rotation.x = 1.16;
        cloud.rotation.y = 0.12;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material.opacity = 0.55;

        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    });

    let textureEffect;

    loader.load(stars, (texture) => {
      textureEffect = new POSTPROCESSING.TextureEffect({
        blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
        texture,
      });
      textureEffect.blendMode.opacity.value = 0.2;
    });

    const bloomEffect = new POSTPROCESSING.BloomEffect({
      blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
      kernelSize: POSTPROCESSING.KernelSize.SMALL,
      useLuminanceFilter: true,
      luminanceThreshold: 0.3,
      luminanceSmoothing: 0.75,
    });
    bloomEffect.blendMode.opacity.value = 1.5;

    const composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));

    const animate = () => {
      cloudParticles.forEach((particle) => {
        particle.rotation.z -= 0.002;
      });

      renderer.render(scene, camera);
      composer.render(0.1);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      id="canvas"
      style={{
        height: dimensions.height,
        width: dimensions.width,
        zIndex: -20,
      }}
    >
      <div
        style={{
          zIndex: -10,
        }}
      >
        <div
          style={{
            backgroundColor: 'transparent',
            color:
              localStorage.getItem('lightMode') === 'true'
                ? 'whitesmoke'
                : '#fbcce7',
            left: '50%',
            position: 'absolute',
            textShadow: '1px 1px 1px black',
            top: dimensions.height + 100,
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <div
            className="header"
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              paddingTop: '5rem',
            }}
          >
            <h1>
              <Typewriter
                options={{
                  strings: 'Welcome! My Name is CJ Jones',
                  autoStart: true,
                  loop: false,
                }}
              />
            </h1>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'Mobile Developer',
                    'Web Developer',
                    'Consultant',
                    'Mentor',
                    'Tutor',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <div id="sectionD">
              <div
                className="sectionD2"
                style={{
                  border: 'none',
                }}
              >
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>
                <Typewriter
                  options={{
                    strings: 'Web Development',
                    autoStart: true,
                    loop: false,
                  }}
                />
              </div>

              <div className="sectionD1">
                <Typewriter
                  options={{
                    strings: 'Specializing In',
                    autoStart: true,
                    loop: false,
                  }}
                />
              </div>

              <div className="sectionD2">
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://docs.expo.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.imgur.com/LNiblbi.png"
                    alt="react native expo"
                    width="40"
                    height="40"
                  />
                </a>
                &nbsp;
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>
                <Typewriter
                  options={{
                    strings: 'Mobile Development',
                    autoStart: true,
                    loop: false,
                  }}
                />
              </div>
            </div>

            <Button
              label="See Jones Engineer"
              onClick={onClick}
              style={{ marginTop: '2rem' }}
            />
          </div>

          <div
            id="landingPage"
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              paddingTop: '3rem',
            }}
          >
            <div id="sectionA" style={{ width: dimensions.width }}>
              I am a freelance software engineer, passionate about learning &
              implementing new technologies. I am proficient in writing clean,
              efficient, DRY implementations. I am a fastidious engineer and
              perspicacious problem solver who can accomplish anything I set my
              mind to.
            </div>

            <div id="sectionC">
              <div
                align="center"
                id="sectionC1"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Proficient Languages </h4>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />
                </a>
              </div>

              <div
                align="center"
                id="sectionC2"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Familiar (Read-Only) Languages </h4>
                <a
                  href="https://www.python.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="python"
                    width="40"
                    height="40"
                  />
                </a>
              </div>

              <div
                align="center"
                id="sectionC1"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Knowledgeable Languages </h4>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>

            <div id="sectionC" style={{ width: dimensions.width }}>
              <div
                className="sectionC2"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Front-End </h4>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>
                &nbsp;
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://mui.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
                    alt="MUI"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.primefaces.org/primereact/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.primefaces.org/primereact/images/primereact-logo-dark.svg"
                    alt="PrimeReact UI"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://chakra-ui.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/344/chakra-ui.png"
                    alt="Chakra UI"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://webpack.js.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                    alt="webpack"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/wired/344/ffffff/babel.png"
                    alt="babel"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://threejs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg"
                    alt="three js"
                    width="40"
                    height="40"
                  />
                </a>
              </div>

              <div
                className="sectionC1"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Tools </h4>

                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/344/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-filled-tal-revivo.png"
                    alt="netlify"
                    width="30"
                    height="25"
                  />
                </a>
                <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/ffffff/external-glyph-shapes-tanah-basah-glyph-tanah-basah-69.png"
                    width="35"
                    height="35"
                    alt="vercel"
                  />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/dusk/45/000000/github.png"
                    width="40"
                    height="40"
                    alt="github"
                  />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/nolan/45/git.png"
                    width="40"
                    height="40"
                    alt="git"
                  />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    align="center"
                    img
                    src="https://img.icons8.com/nolan/45/heroku.png"
                    width="40"
                    height="40"
                    alt="heroku"
                  />
                </a>
              </div>
              <div
                className="sectionC2"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Back-End </h4>

                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/fluency/344/node-js.png"
                    alt="nodejs"
                    width="40"
                    height="40"
                  />
                </a>

                <a
                  href="https://sequelize.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original-wordmark.svg"
                    alt="sequelize"
                    width="40"
                    height="40"
                  />
                </a>

                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="postgresql"
                    width="40"
                    height="40"
                  />
                </a>

                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="express"
                    width="40"
                    height="40"
                  />
                </a>

                <a
                  href="https://firebase.google.com/docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/2x/firebase.png"
                    alt="firebase"
                    width="40"
                    height="40"
                  />
                </a>

                <a
                  href="https://firebase.google.com/docs/firestore"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/2x/cloud-firestore.png"
                    alt="firestore"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>

            <div
              id="sectionC"
              style={{
                paddingBottom: '2rem',
                width: '100vw',
              }}
            >
              <div
                className="sectionC1"
                style={{ width: dimensions.width / 3 }}
              >
                Web Apps
              </div>
              <div
                className="sectionC2"
                style={{ width: dimensions.width / 3 }}
              >
                Mobile Apps
              </div>
              <div
                className="sectionC1"
                style={{ width: dimensions.width / 3 }}
              >
                Websites
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
