import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import * as POSTPROCESSING from 'postprocessing';
import Typewriter from 'typewriter-effect';
import smoke from '../../photos/smoke.png';
import OpenUp from '../../sounds/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../sounds/AccessGrantedComputerVoice.mp3';
import {
  BackendData,
  FrontendData,
  LanguagesData,
  ToolsData,
} from '../techSkills/TechSkillsData';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import './LandingPage.css';
import {
  MobileDevelopmentData,
  WebDevelopmentData,
} from '../techSkills/SpecializationData';

const LandingPage = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

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
    renderer.setSize(dimensions.width, dimensions.height * 2);
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
        particle.rotation.z -= 0.003;
      });

      renderer.render(scene, camera);
      composer.render(0.1);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    const playSoundWhileEnteringSite = () => {
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

    const siteEntrance = document.getElementById('enterSite');
    siteEntrance.addEventListener('click', playSoundWhileEnteringSite);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      id="canvas"
      style={{
        height: dimensions.height * 2,
        position: 'sticky',
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
                : '#ba68c8',
            left: '50%',
            position: 'absolute',
            textShadow: '1px 1px 1px black',
            top: dimensions.height < 700 ? dimensions.height / 0.8 : '50rem',
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
              paddingTop: dimensions.height <= 600 ? '40rem' : '5rem',
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
                {WebDevelopmentData.map((data, index) => (
                  <a
                    href={data.href}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={data.alt}
                      height="40"
                      key={index}
                      src={data.src}
                      width="40"
                    />
                  </a>
                ))}

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
                {MobileDevelopmentData.map((data, index) => (
                  <a
                    href={data.href}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={data.alt}
                      height="40"
                      key={index}
                      src={data.src}
                      width="40"
                    />
                  </a>
                ))}

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
              id="enterSite"
              label="See Jones Engineer"
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
                {LanguagesData.map((data, index) => (
                  <a
                    href={data.href}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={data.alt}
                      height="40"
                      key={index}
                      src={data.src}
                      width="40"
                    />
                  </a>
                ))}
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
                {FrontendData.map((data, index) => (
                  <a
                    href={data.href}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={data.alt}
                      height="40"
                      key={index}
                      src={data.src}
                      width="40"
                    />
                  </a>
                ))}
              </div>

              <div
                className="sectionC1"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Tools </h4>

                {ToolsData.map((data, index) => (
                  <a
                    href={data.href}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={data.alt}
                      height="40"
                      key={index}
                      src={data.src}
                      width="40"
                    />
                  </a>
                ))}
              </div>
              <div
                className="sectionC2"
                style={{ width: dimensions.width / 3 }}
              >
                <h4 align="center"> Back-End </h4>

                {BackendData.map((data, index) => (
                  <a
                    href={data.href}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={data.alt}
                      height="40"
                      key={index}
                      src={data.src}
                      width="40"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div
              id="sectionC"
              style={{
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
