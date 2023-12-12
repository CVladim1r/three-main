import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.134.0/examples/jsm/loaders/GLTFLoader.js';
import init from './init';
const { sizes, camera, scene, canvas, controls, renderer } = init();





camera.position.z = 1;
scene.add(camera);
var light = new THREE.AmbientLight( 0x404040 ); // soft white light (мягкий белый свет)
scene.add( light );

const loader = new GLTFLoader();






loader.load( '/models/Capblend.glb', function ( gltf ) {
	scene.add( gltf.scene);

    console.log(gltf);
}, undefined, function ( error ) {

	console.error( error );

} );



function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();