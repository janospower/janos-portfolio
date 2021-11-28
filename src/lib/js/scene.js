import * as THREE from 'three';

import { FlakesTexture } from './FlakesTexture.js';
import { RGBELoader } from './RGBELoader.js';

let scene, camera, renderer, pointlight;

export const createScene = (el) => {
	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: el });
	renderer.setSize(410, 410);

	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1.25;

	camera = new THREE.PerspectiveCamera(50, 410 / 410, 1, 1000);
	camera.position.set(0, 0, 239);

	pointlight = new THREE.PointLight(0xca0060, 1);
	pointlight.position.set(200, 200, 200);
	scene.add(pointlight);

	let envmaploader = new THREE.PMREMGenerator(renderer);

	new RGBELoader().setPath('textures/').load('studio_small_08_4k.hdr', function (hdrmap) {
		let envmap = envmaploader.fromCubemap(hdrmap);
		let texture = new THREE.CanvasTexture(new FlakesTexture());
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.x = 10;
		texture.repeat.y = 6;

		const ballMaterial = {
			clearcoat: 1.0,
			clearcoatRoughness: 0.1,
			metalness: 0.9,
			roughness: 0.5,
			color: 0xb8147c,
			normalMap: texture,
			normalScale: new THREE.Vector2(0.15, 0.15),
			envMap: envmap.texture
		};

		let ballGeo = new THREE.SphereGeometry(100, 32, 32);
		let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
		let ballMesh = new THREE.Mesh(ballGeo, ballMat);
		scene.add(ballMesh);

		renderer.render(scene, camera);
	});
};
