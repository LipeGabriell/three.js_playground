import { Color, Scene } from '../../three.js/src/Three.js';

function createScene() {
    const scene = new Scene();

    scene.background = new Color('skyblue');

    return scene;
}

export { createScene };