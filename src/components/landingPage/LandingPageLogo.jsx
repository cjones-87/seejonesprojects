import { useEffect } from 'react';
import * as THREE from 'three';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import favicon from '../../../public/favicon.ico';
import blueShirtSmile from '../../photos/blueShirtSmile.png';

const LandingPageLogo = () => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera =
      width < 768
        ? new THREE.OrthographicCamera(
            width / -6,
            width / 6,
            height / 6,
            height / -6,
            1,
            1000
          )
        : new THREE.OrthographicCamera(
            width / -10,
            width / 10,
            height / 10,
            height / -10,
            1,
            1000
          );
    camera.position.z = 50;

    const canvas = document.getElementById('landingPageLogo');
    const landingPageLogoContainer = document.getElementById(
      'landingPageLogoContainer'
    );

    if (!canvas || !landingPageLogoContainer) {
      console.error('Missing required elements');
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas,
      antialias: true,
    });
    renderer.setSize(width, height);
    landingPageLogoContainer.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const sphereGeometry = new THREE.SphereGeometry(20, 32, 32);
    const texture1 = new THREE.TextureLoader().load(favicon);
    const texture2 = new THREE.TextureLoader().load(blueShirtSmile);

    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    texture1.repeat.set(2, 1);

    texture2.wrapS = THREE.RepeatWrapping;
    texture2.wrapT = THREE.RepeatWrapping;
    texture2.repeat.set(2, 1);

    const sphereMaterial1 = new THREE.MeshBasicMaterial({ map: texture1 });
    const sphereMaterial2 = new THREE.MeshBasicMaterial({ map: texture2 });

    const sphereMesh1 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
    const sphereMesh2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);

    scene.add(sphereMesh1);
    scene.add(sphereMesh2);

    width > 768
      ? sphereMesh1.position.set(-50, 0, 0)
      : sphereMesh1.position.set(-30, 0, 0);
    width > 768
      ? sphereMesh2.position.set(50, 0, 0)
      : sphereMesh2.position.set(30, 0, 0);

    const animate = () => {
      const rotationSpeed = 0.015;
      const bounceSpeed = 0.5;
      const bounceDistance = height < 800 ? 150 : 200;

      sphereMesh1.rotation.y += rotationSpeed;
      sphereMesh2.rotation.y -= rotationSpeed;

      if (sphereMesh1.position.y <= -bounceDistance / 2) {
        sphereMesh1.userData.direction = 1;
      } else if (sphereMesh1.position.y >= bounceDistance / 2) {
        sphereMesh1.userData.direction = -1;
      }
      sphereMesh1.position.y += bounceSpeed * sphereMesh1.userData.direction;

      if (sphereMesh2.position.y >= bounceDistance / 2) {
        sphereMesh2.userData.direction = -1;
      } else if (sphereMesh2.position.y <= -bounceDistance / 2) {
        sphereMesh2.userData.direction = 1;
      }
      sphereMesh2.position.y += bounceSpeed * sphereMesh2.userData.direction;

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    sphereMesh1.userData.direction = -1;
    sphereMesh2.userData.direction = 1;

    animate();
  }, [height, width]);

  return (
    <div
      id="landingPageLogoContainer"
      style={{ position: 'absolute', zIndex: 'auto' }}
    >
      <canvas id="landingPageLogo" />
    </div>
  );
};

export default LandingPageLogo;
