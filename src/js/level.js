import {
    Scene,
    Actor,
    Vector,
    CollisionType,
    Label,
    Font,
    FontUnit,
    Color
} from "excalibur";

import { Resources } from "./resources.js";
import { Fish } from "./fish.js";
import { Shark } from "./shark.js";
import { Mine } from "./mine.js";
import { ScaryFish } from "./scaryfish.js";

export class Level extends Scene {

    onInitialize(engine) {

        const water = new Actor();
        water.graphics.use(Resources.Water.toSprite());
        water.pos = new Vector(400, 300);
        water.z = -1;
        water.body.collisionType = CollisionType.PreventCollision;
        this.add(water);

        this.scoreLabel = new Label({
            text: "Score: 0",
            pos: new Vector(20, 20),
            font: new Font({
                family: "Arial",
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        this.add(this.scoreLabel);

        this.healthLabel = new Label({
            text: "Health: 100",
            pos: new Vector(20, 55),
            font: new Font({
                family: "Arial",
                size: 24,
                unit: FontUnit.Px,
                color: Color.Green
            })
        });
        this.add(this.healthLabel);

        this.shark = new Shark();
        this.add(this.shark);

        for (let i = 0; i < 25; i++) {
            const fish = new Fish(
                Math.random() * 800,
                Math.random() * 600
            );

            this.add(fish);
        }

        for (let i = 0; i < 10; i++) {
            const mine = new Mine(
                Math.random() * 800,
                Math.random() * 600
            );

            this.add(mine);
        }

        for (let i = 0; i < 5; i++) {
            const scaryFish = new ScaryFish(
                Math.random() * 800,
                Math.random() * 600
            );

            this.add(scaryFish);
        }
    }

    updateScore(score) {
        this.scoreLabel.text = `Score: ${score}`;
    }

    updateHealth(health) {
        this.healthLabel.text = `Health: ${health}`;

        if (health <= 40) {
            this.healthLabel.font = new Font({
                family: "Arial",
                size: 24,
                unit: FontUnit.Px,
                color: Color.Red
            });
        }
    }

    gameOver() {
        this.engine.goToScene("game-over");
    }
}