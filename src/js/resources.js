import { ImageSource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {

    Fish: new ImageSource('images/fish.png'),

    Shark: new ImageSource('images/shark.png'),

    Bones: new ImageSource('images/bones.png'),

    Water: new ImageSource('images/water.jpg'),

    Bubble: new ImageSource('images/bubble.png'),

    Mine: new ImageSource('images/mine.png'),

    ScaryFish: new ImageSource('images/fish.png')
}

const ResourceLoader = new Loader()

for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }