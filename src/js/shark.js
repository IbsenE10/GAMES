import { Actor, Vector, Keys } from "excalibur";
import { Resources } from "./resources.js";
import { Mine } from "./mine.js";
import { Fish } from "./fish.js";
import { Mine } from "./mine.js";

export class Shark extends Actor {

    constructor() {
        super();

        this.score = 0;
        this.health = 100;
    }

    onInitialize(engine) {

        this.graphics.use(Resources.Shark.toSprite());

        this.pos = new Vector(300, 300);

        this.on("collisionstart", (event) => {

            console.log("Collision!");

            // remove object you hit
            event.other.owner.kill();
        });
        this.on("collisionstart", (event) => {

    if(event.other.owner instanceof Fish) {

        this.score += 10;

        console.log("Score:", this.score);

        event.other.owner.kill();
    }

    if(event.other.owner instanceof Mine) {

        this.health -= 20;

        console.log("Health:", this.health);

        event.other.owner.kill();

        if(this.health <= 0) {
            this.kill();
        }
    }
});
    }

    onPreUpdate(engine) {

        this.vel = new Vector(0,0);

        // WASD movement
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
    }
    
}