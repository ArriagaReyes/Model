import Consequence from "./Consequence";

export default class Time extends Consequence {
    constructor() {
        super();

        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;
        window.requestAnimationFrame(this.tick.bind(this));
    }

    tick() {
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        this.trigger('tick', {
            delta: this.delta,
            elapsed: this.elapsed
        });

        window.requestAnimationFrame(this.tick.bind(this));
    }
}