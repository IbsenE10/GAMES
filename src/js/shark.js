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

        super();

        this.score = 0;
        this.health = 100;
    }

    onInitialize(engine) {

        // sprite
        this.graphics.use(
            Resources.Shark.toSprite()
        );

        // position
        this.pos = new Vector(300, 300);

        // collision
        this.body.collisionType =
            CollisionType.Active;

        // collider size
        this.collider.useBoxCollider(
            120,
            80
        );

        // collision event
        this.on(
            "collisionstart",
            (event) => {

                // hit fish
                if(event.other.owner instanceof Fish) {

                    this.score += 10;

                    console.log(
                        "Score:",
                        this.score
                    );

                    event.other.owner.kill();
                }

                // hit mine
                if(event.other.owner instanceof Mine) {

                    this.health -= 20;

                    console.log(
                        "Health:",
                        this.health
                    );

                    event.other.owner.kill();

                    // game over
                    if(this.health <= 0) {

                        console.log(
                            "GAME OVER"
                        );

                        this.kill();
                    }
                }
            }
        );
    }

    onPreUpdate(engine) {

        // reset velocity
        this.vel = new Vector(0, 0);

        // WASD

        if(engine.input.keyboard.isHeld(Keys.W)) {
            this.vel.y = -300;
        }

        if(engine.input.keyboard.isHeld(Keys.S)) {
            this.vel.y = 300;
        }

        if(engine.input.keyboard.isHeld(Keys.A)) {
            this.vel.x = -300;
        }

        if(engine.input.keyboard.isHeld(Keys.D)) {
            this.vel.x = 300;
        }

        // Arrow keys

        if(engine.input.keyboard.isHeld(Keys.Up)) {
            this.vel.y = -300;
        }

        if(engine.input.keyboard.isHeld(Keys.Down)) {
            this.vel.y = 300;
        }

        if(engine.input.keyboard.isHeld(Keys.Left)) {
            this.vel.x = -300;
        }

        if(engine.input.keyboard.isHeld(Keys.Right)) {
            this.vel.x = 300;
        }
    }
}