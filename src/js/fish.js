import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Fish extends Actor {
<<<<<<< HEAD
    constructor(x, y) {
        super();

        this.graphics.use(Resources.Fish.toSprite());
        this.pos = new Vector(x, y);
        this.vel = new Vector(100, 0);

        this.events.on("exitviewport", () => this.fishLeft());
    }

    fishLeft() {
        this.pos = new Vector(-50, Math.random() * 720);
=======

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
>>>>>>> fecaffddf2be073e5639f2a69cfaf475678614f2
    }
}