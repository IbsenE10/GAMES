import '../css/style.css'
<<<<<<< HEAD
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from "./fish.js";
=======

import {
    Actor,
    Engine,
    Vector,
    DisplayMode
} from "excalibur"

import {
    Resources,
    ResourceLoader
} from './resources.js'

import { Fish } from "./fish.js";
import { Shark } from "./shark.js";
import { Mine } from "./mine.js";
>>>>>>> fecaffddf2be073e5639f2a69cfaf475678614f2

export class Game extends Engine {
    constructor() {

        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });

<<<<<<< HEAD
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        console.log("start de game!");

        const water = new Actor();
        water.graphics.use(Resources.Water.toSprite());
        water.pos = new Vector(640, 360);
        this.add(water);

       
for (let i = 0; i < 100; i++) {
    const fish = new Fish(
        Math.random() * 1280,
        Math.random() * 720
    );

    this.add(fish);
}
        const bones = new Actor();
        bones.graphics.use(Resources.Bones.toSprite());
        bones.pos = new Vector(800, 300);
        bones.vel = new Vector(40, 0);
        bones.events.on("exitviewport", (e) => this.bonesLeft(e));
        this.add(bones);

        const shark = new Actor();
        shark.graphics.use(Resources.Shark.toSprite());
        shark.pos = new Vector(800, 400);
        shark.vel = new Vector(70, 0);
        shark.events.on("exitviewport", (e) => this.sharkLeft(e));
        this.add(shark);
    }

    bonesLeft(e) {
        e.target.pos = new Vector(0, 400);
    }

    sharkLeft(e) {
        e.target.pos = new Vector(0, 400);
    }
=======
        this.start(ResourceLoader)
            .then(() => this.startGame());
    }

    startGame() {

        console.log("Game Started");

        // WATER BACKGROUND
        const water = new Actor();

        water.graphics.use(
            Resources.Water.toSprite()
        );

        water.pos = new Vector(640, 360);

        // background layer
        water.z = -1;

        this.add(water);

        // PLAYER SHARK
        const shark = new Shark();

        this.add(shark);

        // 100 FISH
        for(let i = 0; i < 100; i++) {

            const fish = new Fish(

                Math.random() * 1280,
                Math.random() * 720

            );

            this.add(fish);
        }

        // 10 MINES
        for(let i = 0; i < 10; i++) {

            const mine = new Mine(

                Math.random() * 1280,
                Math.random() * 720

            );

            this.add(mine);
        }
    }
>>>>>>> fecaffddf2be073e5639f2a69cfaf475678614f2
}

new Game();