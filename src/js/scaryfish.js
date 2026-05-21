import { Color, Vector } from "excalibur";
import { Fish } from "./fish.js";
import { Shark } from "./shark.js";

export class ScaryFish extends Fish {

    constructor(x, y) {
        super(x, y);

        this.sprite.tint = Color.Red;
        this.vel = new Vector(-200, 0);

        this.on("collisionstart", (event) => {
            if (event.other instanceof Shark) {
                this.flee();
            }
        });
    }

    flee() {
        this.actions.clearActions();

        this.actions
            .moveTo(
                new Vector(this.pos.x + 300, this.pos.y - 200),
                200
            )
            .callMethod(() => {
                this.vel = new Vector(-200, 0);
            });
    }
}