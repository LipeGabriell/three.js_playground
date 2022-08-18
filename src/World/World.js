import { createCamera } from '../components/camera.js';
import { createCube } from '../components/cube.js';
import { createScene } from '../components/scene.js';
import { createLights } from '../components/lights.js';
import { createRenderer } from '../systems/renderer.js';
import { Resizer } from '../systems/Resizer.js';
import { Loop } from '../systems/loop.js';
import { createControls } from '../systems/controls.js';



let camera;
let scene;
let renderer;
let loop;
class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);
        const controls = createControls(camera, renderer.domElement);

        loop = new Loop(camera, scene, renderer);

        const cube = createCube();
        const light = createLights();

        loop.updatables.push(cube);
        loop.updatables.push(controls);

        scene.add(light);
        scene.add(cube);

        const resizer = new Resizer(container, camera, renderer);



    };


    render() {

        renderer.render(scene, camera);

    };

    start() {
        loop.start();
    };

    stop() {
        loop.stop();
    };




}

export { World };
