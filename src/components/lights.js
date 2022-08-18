import { DirectionalLight } from '../../three.js/src/Three.js';

function createLights() {

    const light = new DirectionalLight('white', 3);

    light.position.set(1, 2, 5);

    return light;


};

export { createLights };