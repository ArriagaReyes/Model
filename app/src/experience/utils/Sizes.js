import Consequence from "./Consequence";

export default class Sizes extends Consequence {
    constructor() {
        super();

        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);

            this.trigger('resize');
        });
    }
}