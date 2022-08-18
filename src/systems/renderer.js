import { WebGLRenderer } from '../../three.js/src/Three.js';

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });

    renderer.physicallyCorrectLights = true;

    return renderer;
}



export { createRenderer };