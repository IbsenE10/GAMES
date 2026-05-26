import {
    Scene,
    Label,
    Font,
    FontUnit,
    Color,
    Vector,
    Keys
} from "excalibur";

export class GameOver extends Scene {

    onInitialize(engine) {

        // GAME OVER title
        const titleLabel = new Label({
            text: 'GAME OVER',
            pos: new Vector(440, 300),
            font: new Font({
                family: 'Arial',
                size: 72,
                unit: FontUnit.Px,
                color: Color.Red
            })
        });
        this.add(titleLabel);

        // restart instruction
        const restartLabel = new Label({
            text: 'Press ENTER to play again',
            pos: new Vector(430, 400),
            font: new Font({
                family: 'Arial',
                size: 32,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        this.add(restartLabel);
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            engine.goToScene('level');
        }
    }
}