import * as THREE from 'three';
import Consequence from './Consequence';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class Resources extends Consequence {
    constructor(sources) {
        super();

        this.sources = sources;

        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
    }

    startLoading() {
        for(const source of this.sources) {
            if(source.type === 'gltfModel') {
                this.loaders.gltfLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                });
            } else if(source.type === 'texture') {
                this.loaders.textureLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                });
            }
        }

        if(this.loaded === 0) {
            console.log('No assets found');
        }
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file;
        this.loaded++;

        if(this.loaded === this.toLoad) {
            console.log(`Loaded ${this.loaded} asset(s)`);
            //this.trigger('resources loaded');
        }
    }
}