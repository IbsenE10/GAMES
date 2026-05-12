import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-10,0)
        fish.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(fish)
        
          const bones = new Actor()
        bones.graphics.use(Resources.Bones.toSprite())
        bones.pos = new Vector(800, 300)
        bones.vel = new Vector(40,0)
        bones.events.on("exitviewport", (e) => this.bonesLeft(e))
        this.add(bones)

             const shark = new Actor()
        shark.graphics.use(Resources.Shark.toSprite())
        shark.pos = new Vector(800, 300)
        shark.vel = new Vector(70,0)
        shark.events.on("exitviewport", (e) => this.sharkLeft(e))
        this.add(shark)

        const water = new Actor()
        water.graphics.use(Resources.Water.toSprite())
        this.add(water)




    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, 300)
    }
    bonesLeft(e){
        e.target.pos = new Vector(1000,400)
    }
       sharkLeft(e){
        e.target.pos = new Vector(1200,400)
    }


    createBubble(){
        const bubble = new Actor();
        bubble.graphics.use(Resources.Bubble.toSprite());
        const randomX = Math.random() * this.halfDrawWidth;
        const randomY = Math.random() * 1000 - (this.halfDrawHeight);
        bubble.pos = new Vector (randomX,randomY);
        
        const randomVelY = Math.random() * 10 + 10;
        bubble.vel = new Vector(0, -randomVelY)
 
 
        this.add(bubble);
    }
   
}

new Game()
