import {
	Scene,
	WebGLRenderer,
	PerspectiveCamera,
	SphereGeometry,
	MeshNormalMaterial,
	Mesh,
	ShaderChunk
} from 'three';
// import TrackballControls from 'three-trackballcontrols';

let scene, camera, renderer, ballMesh, controls;

export const createScene = (el) => {
	scene = new Scene();

	renderer = new WebGLRenderer({ alpha: true, antialias: true, canvas: el });
	renderer.setSize(410, 410);

	camera = new PerspectiveCamera(50, 410 / 410, 1, 1000);
	camera.position.set(0, 0, 239);

	// controls = new TrackballControls(camera, renderer.domElement);
	// controls.noZoom = true;
	// controls.noPan = true;

	let ballGeo = new SphereGeometry(100, 64, 32);
	let ballMat = new MeshNormalMaterial();
	ballMat.onBeforeCompile = (shader) => {
		const token = '#include <defaultnormal_vertex>';
		const customTransform = ShaderChunk['defaultnormal_vertex'].replace(
			'transformedNormal = normalMatrix * transformedNormal;',
			'transformedNormal =  mat3(modelMatrix) * transformedNormal;'
		);
		shader.vertexShader = shader.vertexShader.replace(token, customTransform);
	};
	ballMesh = new Mesh(ballGeo, ballMat);
	scene.add(ballMesh);

	renderer.render(scene, camera);
	animate();

	function animate() {
		// controls.update();

		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
};
