import {
    Actor,
    Vector,
    CollisionType
} from "excalibur";

import { Resources } from "./resources.js";

export class Fish extends Actor {

    constructor(x, y) {
        super();

        this.sprite = Resources.Fish.toSprite();
        this.graphics.use(this.sprite);

        this.pos = new Vector(x, y);

        this.vel = new Vector(
            Math.random() * 100 + 50,
            0
        );

        this.body.collisionType = CollisionType.Active;

        this.collider.useBoxCollider(80, 50);

        this.on("exitviewport", () => this.fishLeft());
    }

    fishLeft() {
        this.pos = new Vector(
            -50,
            Math.random() * 720
        );

        this.vel = new Vector(
            Math.random() * 100 + 50,
            0
        );
    }
}