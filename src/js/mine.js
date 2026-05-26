import {
    Actor,
    Vector,
    CollisionType
} from "excalibur";

import { Resources } from "./resources.js";

export class Mine extends Actor {

    constructor(x, y) {
        super({ width: 80, height: 80 });

        // sprite
        this.graphics.use(
            Resources.Mine.toSprite()
        );

        // position
        this.pos = new Vector(x, y);

        // movement
        this.vel = new Vector(-200, 0);

        // Passive: shark's Active collision detects it,
        // but the mine doesn't push the shark around
        this.body.collisionType = CollisionType.Passive;

        // viewport event
        this.on("exitviewport", () => this.mineLeft());
    }

    mineLeft() {
        // respawn on right side
        this.pos = new Vector(
            1400,
            Math.random() * 720
        );
    }
}