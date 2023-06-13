import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import logo from '../../photos/logoCJ.png';
import blueShirtSmile from '../../photos/blueShirtSmile.png';
import altLogo from '../../photos/favicon.png';

const NavbarLogo = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    camera.position.z = 100;

    const canvas = document.getElementById('navbarLogo');
    const navbarContainer = document.getElementById('navbarLogoContainer');
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas,
      antialias: true, //makes 3d object look smooth
    });
    renderer.setSize('100', '100');
    navbarContainer.append(renderer.domElement);

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

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const animate = () => {
      controls.update();
      boxMesh.rotation.x += 0.008;
      boxMesh.rotation.y += 0.008;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  });

  return (
    <div>
      <canvas id="navbarLogo" />
    </div>
  );
};

export default NavbarLogo;
