import { Actor, Vector } from "excalibur";

import { Resources } from "./resources.js";

export class Mine extends Actor {

    constructor(x, y) {
        super();

        this.graphics.use(
            Resources.Mine.toSprite()
        );

        this.pos = new Vector(x, y);

        // move left
        this.vel = new Vector(-200, 0);

        // viewport event
        this.on(
            "exitviewport",
            () => this.mineLeft()
        );
    }

    mineLeft() {

        // respawn on right
        this.pos = new Vector(
            1400,
            Math.random() * 720
        );
    }
}