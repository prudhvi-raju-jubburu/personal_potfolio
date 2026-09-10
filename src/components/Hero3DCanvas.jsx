import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    if (!currentRef) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const width = currentRef.clientWidth || 500;
    const height = currentRef.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 6 : 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Primary Subtle Abstract Glass Torus
    const torusGeo = new THREE.TorusGeometry(1.6, 0.22, 16, 100);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.22,
      ior: 1.4,
      wireframe: false,
    });
    const torusMesh = new THREE.Mesh(torusGeo, glassMat);
    torusMesh.rotation.x = Math.PI / 4;
    mainGroup.add(torusMesh);

    // 2. Secondary Floating Ring Accent
    const ringGeo = new THREE.TorusGeometry(2.1, 0.04, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.y = Math.PI / 3;
    mainGroup.add(ringMesh);

    // Subtle Ambient Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const light1 = new THREE.PointLight(0x38bdf8, 1.8, 30);
    light1.position.set(4, 4, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xf97316, 1.5, 30);
    light2.position.set(-4, -4, 2);
    scene.add(light2);

    // Mouse Parallax Lerping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      const rect = currentRef.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!currentRef) return;
      const newW = currentRef.clientWidth;
      const newH = currentRef.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Slow subtle rotation
        torusMesh.rotation.z = elapsedTime * 0.12;
        ringMesh.rotation.z = -elapsedTime * 0.08;

        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        mainGroup.rotation.y = targetX * 0.35;
        mainGroup.rotation.x = targetY * 0.35;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentRef && renderer.domElement && renderer.domElement.parentNode === currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      torusGeo.dispose();
      glassMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-3d-canvas-wrapper"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
};

export default Hero3DCanvas;
