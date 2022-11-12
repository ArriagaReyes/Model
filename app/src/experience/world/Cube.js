import * as THREE from 'three';
import Experience from "../Experience";

export default class Cube {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setGeometry();
        this.setMaterial();
        this.setMesh();
    }

    setGeometry() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    setMaterial() {
        this.material = new THREE.MeshNormalMaterial();
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }
}