import { BoxBufferGeometry, MathUtils, Mesh, MeshStandardMaterial, TextureLoader } from '../../three.js/src/Three.js';

const radsPerSec = MathUtils.degToRad(90);




function createMaterial() {

    const textureLoader = new TextureLoader();

    const texture = textureLoader.load('/assets/textura.png')

    const material = new MeshStandardMaterial({ map: texture, });

    return material;
}

function createCube() {
    const geometry = new BoxBufferGeometry(1);
    const material = createMaterial();
    const cube = new Mesh(geometry, material);

    cube.tick = (delta) => {
        //cube.rotation.z += radsPerSec * delta;
        //cube.rotation.x += radsPerSec * delta;
        //cube.rotation.y += radsPerSec * delta;
    }
    return cube;
}


export { createCube };