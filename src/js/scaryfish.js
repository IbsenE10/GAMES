import { Color, Vector } from "excalibur";
import { Fish } from "./fish.js";

export class ScaryFish extends Fish {

    constructor(x, y) {
        super(x, y);

        this.isScaryFish = true;

        this.sprite.tint = Color.Red;
        this.vel = new Vector(-200, 0);
    }

    onInitialize(engine) {
        this.on("collisionstart", (event) => {
            const other = event.other.owner;

            if (other.isShark) {
                this.flee();
            }
        });
    }

    flee() {
        this.vel = new Vector(0, 0);
        this.actions.clearActions();

        this.actions
            .moveTo(new Vector(this.pos.x + 400, this.pos.y - 200), 500)
            .callMethod(() => {
                this.vel = new Vector(-200, 0);
            });
    }
}