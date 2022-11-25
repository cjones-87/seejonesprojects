import React, { useEffect } from 'react';

import * as THREE from 'three';

import * as POSTPROCESSING from 'postprocessing';

import smoke from '../../photos/smoke.png';
import stars from '../../photos/stars.png';

const PurpleClouds = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    let cloudParticles = [];

    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    let ambient = new THREE.AmbientLight(0x555555);
    // ambient.castShadow = true;
    scene.add(ambient);

    let directionalLight = new THREE.DirectionalLight(0xbf40bf);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    // let orangeLight = new THREE.PointLight(0xcc6600, 50, 450, 1.7);
    // orangeLight.position.set(200, 300, 100);
    // scene.add(orangeLight);

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
    renderer.setSize(window.innerWidth, window.innerHeight);
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
      for (let p = 0; p < 50; p++) {
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

    let effectPass = new POSTPROCESSING.EffectPass({
      camera,
      bloomEffect,
      textureEffect,
    });
    effectPass.renderToScreen = true;

    const composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));

    // composer.addPass(effectPass);

    const animate = () => {
      cloudParticles.forEach((particle) => {
        particle.rotation.z -= 0.002;
      });

      renderer.render(scene, camera);
      composer.render(0.1);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      id="canvas"
      style={{
        height: window.innerHeight,
        width: window.innerWidth,
        zIndex: -100,
      }}
    >
      <div
        style={{
          zIndex: -20,
        }}
      >
        <div
          style={{
            backgroundColor: 'transparent',
            color: 'indigo',
            left: '50%',
            margin: 'auto',
            paddingTop: '50px',
            position: 'absolute',
            textShadow: '1px 1px 1px whitesmoke',
            top: window.innerHeight / 1.7,
            transform: 'translate(-50%, -50%)',
            zIndex: -0,
          }}
        >
          <p>Component info will go here</p>
        </div>
      </div>
    </div>
  );
};

export default PurpleClouds;
