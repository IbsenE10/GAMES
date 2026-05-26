import {
    Actor,
    Vector,
    CollisionType
} from "excalibur";

import { Resources } from "./resources.js";

export class Fish extends Actor {

    constructor(x, y) {
        super({ width: 80, height: 50 });

        this.sprite = Resources.Fish.toSprite();
        this.graphics.use(this.sprite);

        this.pos = new Vector(x, y);

        this.vel = new Vector(
            Math.random() * 100 + 50,
            0
        );

        // Passive: still triggers collision events on Active actors
        // but fish don't push each other or get pushed around
        this.body.collisionType = CollisionType.Passive;

        this.on("exitviewport", () => this.fishLeft());
    }
fishLeft() {
    this.pos = new Vector(
        -50,
        Math.random() * 600
    )

    this.vel = new Vector(
        Math.random() * 100 + 50,
        0
    )
}
}