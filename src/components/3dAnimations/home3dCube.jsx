import { useEffect } from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import * as THREE from 'three';

import logo from './images/favicon.ico';
import altLogo from './images/logoCJ.png';
import blueShirtSmile from './images/blueShirtSmile.png';

export default function Cube() {
  useEffect(() => {
    const scene = new THREE.Scene();

    let FOV;
    let FAR;
    let NEAR = 5;

    // Mobile camera
    if (window.innerWidth <= 768) {
      FOV = 50;
      FAR = 1200;
      // 769px - 1080px screen width camera
    } else if (window.innerWidth >= 769 && window.innerWidth <= 1080) {
      FOV = 50;
      FAR = 1475;
      // > 1080px screen width res camera
    } else {
      FOV = 40;
      FAR = 1800;
    }

    const camera = new THREE.PerspectiveCamera(
      FOV,
      window.innerWidth / window.innerHeight,
      NEAR,
      FAR
    );
    camera.position.z = 100;

    const canvas = document.getElementById('threeJsCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.outerWidth, 450);
    document.getElementById('cubeDiv').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const boxGeometry = new THREE.BoxGeometry(30, 30, 30);
    const cubeMaterials = [
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(blueShirtSmile),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(blueShirtSmile),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(altLogo),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(altLogo),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(logo),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(logo),
        side: THREE.DoubleSide,
      }),
    ];
    const boxMesh = new THREE.Mesh(boxGeometry, cubeMaterials);
    scene.add(boxMesh);

    const animate = () => {
      boxMesh.rotation.x += 0.008;
      boxMesh.rotation.y += 0.008;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div
      id="cubeDiv"
      className="App bg-black-alpha-90"
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
      }}
    >
      <canvas id="threeJsCanvas" className="App bg-black-alpha-90" />
    </div>
  );
}
