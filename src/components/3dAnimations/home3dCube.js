import { useEffect } from 'react';

import * as THREE from 'three';

import logo from './images/favicon.ico';
import altLogo from './images/logoCJ.png';
import blueShirtSmile from './images/blueShirtSmile.png';

export default function Cube() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 100;

    const canvas = document.getElementById('threeJsCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // const cubeDiv = document.getElementById('cubeDiv');
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
      boxMesh.rotation.x += 0.02;
      boxMesh.rotation.y += 0.02;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div id="cubeDiv">
      <canvas id="threeJsCanvas" />
    </div>
  );
}
