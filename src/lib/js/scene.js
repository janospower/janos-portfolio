import * as THREE from 'three';
import { OrbitControls } from './OrbitControls.js';

let scene, camera, renderer, ballMesh, controls;

export const createScene = (el) => {
	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: el });
	renderer.setSize(410, 410);

	camera = new THREE.PerspectiveCamera(50, 410 / 410, 1, 1000);
	camera.position.set(0, 0, 239);

	controls = new OrbitControls(camera, renderer.domElement);

	controls.autoRotate = true;
	controls.autoRotateSpeed = 0.5;
	controls.enableDamping = true;

	let ballGeo = new THREE.SphereGeometry(100, 32, 32);
	let ballMat = new THREE.MeshNormalMaterial({ flatShading: true });
	ballMesh = new THREE.Mesh(ballGeo, ballMat);
	scene.add(ballMesh);

	renderer.render(scene, camera);
	animate();

	function animate() {
		controls.update();

		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
};
