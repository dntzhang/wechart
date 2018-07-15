import Earch from '../../src/index';
import '../../../common/orbit-controls';

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.z = 500;

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xAAAAAA);
document.body.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
const group = new THREE.Group();

const earth = new Earch({
    coord: [
        {
            text: '中国',
            color: 0xff3333,
            lng: 116.20,
            lat: 39.55
        },
        {
            text: '比利时',
            color: 0xffcc33,
            lng: 4.21,
            lat: 50.51
        },
        {
            text: '巴西',
            color: 0xffcc00,
            lng: -47.55,
            lat: -15.47
        },
        {
            text: '美国',
            color: 0x33cc33,
            lng: -77.02,
            lat: 39.91
        },
        {
            text: '克罗地亚',
            color: 0x33ccff,
            lng: 15.58,
            lat: 45.50
        }
    ]
});

group.add(earth);
scene.add(group);

const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, 10, 100);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}

animate();