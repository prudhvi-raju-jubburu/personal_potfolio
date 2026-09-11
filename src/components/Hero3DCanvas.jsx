import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    const width = el.clientWidth || 480;
    const height = el.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !lowPower });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.6));
    el.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(1.55, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x7ec8e3,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.012, 8, 80),
      new THREE.MeshBasicMaterial({ color: 0xe8a06a, transparent: true, opacity: 0.35 })
    );
    ring.rotation.x = Math.PI / 2.6;
    group.add(ring);

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e) => {
      if (reduced) return;
      const rect = el.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let frame;
    const clock = new THREE.Clock();
    const tick = () => {
      frame = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      if (!reduced) {
        mesh.rotation.y = t * 0.12;
        mesh.rotation.x = t * 0.05;
        ring.rotation.z = -t * 0.08;
        group.rotation.y += (mouseX - group.rotation.y) * 0.04;
        group.rotation.x += (mouseY - group.rotation.x) * 0.04;
      }
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      mat.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-3d-canvas-wrapper" aria-hidden="true" />;
};

export default Hero3DCanvas;
