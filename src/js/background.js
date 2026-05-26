import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    constructor(width = 800, height = 600) {
        super({
            width,
            height,
            pos: new Vector(width / 2, height / 2)
        })
    }

    onInitialize(engine) {
        const sprite = Resources.BG.toSprite()

        // Stretch the background so it fills the screen.
        sprite.scale = new Vector(
            engine.drawWidth / Resources.BG.width,
            engine.drawHeight / Resources.BG.height
        )

        this.graphics.use(sprite)
    }
}
