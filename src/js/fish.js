import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Fish extends Actor {

    constructor(x, y) {
        super();

        this.graphics.use(
            Resources.Fish.toSprite()
        );

        this.pos = new Vector(x, y);

        // random speed
        this.vel = new Vector(
            Math.random() * 100 + 50,
            0
        );

        // when leaving screen
        this.on(
            "exitviewport",
            () => this.fishLeft()
        );
    }

    fishLeft() {

        // move back to left
        this.pos = new Vector(
            -50,
            Math.random() * 720
        );

        // new random speed
        this.vel = new Vector(
            Math.random() * 100 + 50,
            0
        );
    }
}