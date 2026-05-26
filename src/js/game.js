import '../css/style.css'

import { 
    Engine, 
    DisplayMode 
} from "excalibur"

import { ResourceLoader } from './resources.js'
import { Level } from './level.js'
import { GameOver } from './gameover.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 800, 
            height: 600, 
            maxFps: 60, 
            displayMode: DisplayMode.FitScreen 
        })

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('level', new Level())
        this.add('game-over', new GameOver())

        this.goToScene('level')
    }
}

new Game()