import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Fish extends Actor {

    constructor(x, y) {
        super();

        // sprite
        this.graphics.use(Resources.Fish.toSprite());

        // random position
        this.pos = new Vector(x, y);

        // random speed
        this.vel = new Vector(
            Math.random() * 100 + 30,
            0
        );

        // when fish leaves screen
        this.events.on("exitviewport", () => this.fishLeft());
    }

    fishLeft() {

        // move fish back to left side
        this.pos = new Vector(
            -50,
            Math.random() * 720
        );

        // random new speed
        this.vel = new Vector(
            Math.random() * 100 + 30,
            0
        );
    }
}