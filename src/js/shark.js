import {
    Actor,
    Vector,
    Keys,
    CollisionType
} from "excalibur";

import { Resources } from "./resources.js";
import { Fish } from "./fish.js";
import { Mine } from "./mine.js";

export class Shark extends Actor {

    constructor() {
        super({ width: 120, height: 80 });

        this.score = 0;
        this.health = 100;
        this.isShark = true;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Shark.toSprite());
        this.pos = new Vector(300, 300);

        this.body.collisionType = CollisionType.Active;

        this.on("collisionstart", (event) => {
            const other = event.other.owner;

            if (other instanceof Fish && !other.isScaryFish) {
                this.score += 10;
                other.kill();
                this.scene.updateScore(this.score);
            }

            if (other instanceof Mine) {
                this.health -= 20;
                other.kill();
                this.scene.updateHealth(this.health);

                if (this.health <= 0) {
                    this.kill();
                    this.scene.gameOver();
                }
            }
        });

        this.on("exitviewport", () => this.wrapAround(engine));
    }

    wrapAround(engine) {
        if (this.pos.x > engine.drawWidth) this.pos.x = 0;
        else if (this.pos.x < 0) this.pos.x = engine.drawWidth;

        if (this.pos.y > engine.drawHeight) this.pos.y = 0;
        else if (this.pos.y < 0) this.pos.y = engine.drawHeight;
    }

    onPreUpdate(engine) {
        this.vel = new Vector(0, 0);

        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            this.vel.y = -300;
        }

        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            this.vel.y = 300;
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            this.vel.x = -300;
        }

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            this.vel.x = 300;
        }
    }
}