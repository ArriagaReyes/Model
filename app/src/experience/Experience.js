import * as THREE from 'three';
import Sizes from './utils/Sizes';
import Time from './utils/Time';
import Camera from './Camera';
import Renderer from './Renderer';
import World from './world/index';
import Resources from './utils/Resources';
import sources from './Sources';

let instance = null;

export default class Experience {
    constructor(canvas) {
        if(instance) {
            return instance;
        }

        instance = this;
        window.experience = this;

        this.canvas = canvas;
        this.resources = new Resources(sources);
        this.sizes = new Sizes();
        this.time = new Time();

        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.World = new World();

        this.sizes.on('resize', this.resize.bind(this));
        this.time.on('tick', this.update.bind(this));
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update(time) {
        this.camera.update();
        this.renderer.update();
    }

    destroy() {
        this.sizes.off('resize');
        this.time.off('tick');

        this.camera.controls.dispose();
    }
}