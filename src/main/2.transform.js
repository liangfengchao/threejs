import * as THREE from "three"

// Scene
const scene = new THREE.Scene()

const sizes = {
    width: 800,
    height: 400
}
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)

camera.position.z = 5;

scene.add(camera);

const geometry = new THREE.BoxGeometry(2, 1, 1)

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material)

camera.lookAt(new THREE.Vector3(0, 0, 0))
// Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// 距离原点的向量
// console.log("mesh length", mesh.position.length());
// 检查相机与网格的距离
// console.log("-****-",mesh.position.distanceTo(camera.position))
// mesh.position.normalize()
mesh.position.set(0.7, -0.6, 1)
// Scale
// mesh.scale.x = 1
// mesh.scale.y = 1
// mesh.scale.z = 1
// mesh.position.set(2, 0.5, 0.5)
// Rotation

// Rotation
// mesh.rotation.reorder("YXZ")
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25
scene.add(mesh);

/**
 * Objects
 */
const group = new THREE.Group()

scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xf8000 })
)

cube2.position.x = -2

group.add(cube1)
group.add(cube2)
group.position.y = -1

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


const canvas = document.querySelector('.webgl');
// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
    canvas
});

// 设置渲染的尺寸大小
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)