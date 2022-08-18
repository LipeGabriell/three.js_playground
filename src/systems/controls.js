import { OrbitControls } from "../../three.js/examples/jsm/controls/OrbitControls.js"

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = .3;


    controls.tick = () => controls.update();

    return controls;
}

export { createControls }