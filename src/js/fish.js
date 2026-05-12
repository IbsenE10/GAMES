import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Fish extends Actor {
    constructor(x, y) {
        super();

        this.graphics.use(Resources.Fish.toSprite());
        this.pos = new Vector(x, y);
        this.vel = new Vector(100, 0);

        this.events.on("exitviewport", () => this.fishLeft());
    }

    fishLeft() {
        this.pos = new Vector(-50, Math.random() * 720);
    }
}