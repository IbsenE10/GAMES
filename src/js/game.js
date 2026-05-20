import '../css/style.css'

import { 
    Actor, 
    Engine, 
    Vector, 
    DisplayMode 
} from "excalibur"

import { Resources, ResourceLoader } from './resources.js'
import { Fish } from "./fish.js";

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

        console.log("Game started!");
        for (let i = 0; i < 10; i++) {

    const mine = new Mine(
        Math.random() * 1280,
        Math.random() * 720
    );

    this.add(mine);
}

        // WATER
        const water = new Actor();
        water.graphics.use(Resources.Water.toSprite());

        water.pos = new Vector(640, 360);

        this.add(water);

        // 100 FISH
        for (let i = 0; i < 100; i++) {

            const fish = new Fish(
                Math.random() * 1280,
                Math.random() * 720
            );

            this.add(fish);
        }

        // BONES
        const bones = new Actor();

        bones.graphics.use(Resources.Bones.toSprite());

        bones.pos = new Vector(800, 300);

        bones.vel = new Vector(40, 0);

        bones.events.on(
            "exitviewport",
            (e) => this.bonesLeft(e)
        );

        this.add(bones);

        // SHARK
   import { Shark } from "./shark.js";

const shark = new Shark();

this.add(shark);
    }

    bonesLeft(e) {

        e.target.pos = new Vector(
            -50,
            Math.random() * 720
        );
    }

    sharkLeft(e) {

        e.target.pos = new Vector(
            -50,
            Math.random() * 720
        );
    }
}

new Game();