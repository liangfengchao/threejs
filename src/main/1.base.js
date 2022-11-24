import * as THREE from "three"

// 创建场景
const scene = new THREE.Scene()

const sizes = {
    width: 800,
    height: 600
}
// 创建相机(透视相机)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
// 相机物体
camera.position.set(0, 0, 10);

scene.add(camera);

const helper = new THREE.CameraHelper( camera );
scene.add( helper );

const geometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh);

const canvas = document.querySelector('.webgl');
// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
    canvas
});

// 设置渲染的尺寸大小
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)