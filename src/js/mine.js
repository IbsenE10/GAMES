import {
    Actor,
    Vector,
    CollisionType
} from "excalibur";

import { Resources } from "./resources.js";

export class Mine extends Actor {

    constructor(x, y) {

        super();

        // sprite
        this.graphics.use(
            Resources.Mine.toSprite()
        );

        // position
        this.pos = new Vector(x, y);

        // movement
        this.vel = new Vector(-200, 0);

        // collision
        this.body.collisionType =
            CollisionType.Active;

        // collider size
        this.collider.useBoxCollider(
            80,
            80
        );

        // viewport event
        this.on(
            "exitviewport",
            () => this.mineLeft()
        );
    }

    mineLeft() {

        // respawn on right side
        this.pos = new Vector(
            1400,
            Math.random() * 720
        );
    }
}