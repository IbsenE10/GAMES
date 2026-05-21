import '../css/style.css'
import { ScaryFish } from "./scaryfish.js";

import {
    Actor,
    Engine,
    Vector,
    DisplayMode,
    CollisionType
} from "excalibur"

import {
    Resources,
    ResourceLoader
} from './resources.js'

import { Fish } from "./fish.js";
import { Shark } from "./shark.js";
import { Mine } from "./mine.js";

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });

        this.start(ResourceLoader)
            .then(() => this.startGame());
    }

    startGame() {
        console.log("Game Started");

        // WATER BACKGROUND
        const water = new Actor();

        water.graphics.use(Resources.Water.toSprite());
        water.pos = new Vector(640, 360);
        water.z = -1;

        // make sure water does NOT collide
        water.body.collisionType = CollisionType.PreventCollision;

        this.add(water);

        // PLAYER SHARK
        const shark = new Shark();
        this.add(shark);

        // 25  FISH
        for (let i = 0; i < 25; i++) {
            const fish = new Fish(
                Math.random() * 1280,
                Math.random() * 720
            );

            this.add(fish);
        }

        // 10 MINES
        for (let i = 0; i < 10; i++) {
            const mine = new Mine(
                Math.random() * 1280,
                Math.random() * 720
            );

            this.add(mine);
        }

        for (let i = 0; i < 5; i++) {
            const scaryfish = new ScaryFish(
                Math.random() * 1280,
                Math.random() * 720
            );
        
            this.add(scaryfish);
        }
    }
    

}

new Game();