export class Animal {
    name;
    id;
    voice;
    img;
    step;
    chosen = false;
    translateX = 0;
    constructor(name, id, voice, img, step) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.step = step;
        this.voice = voice;
    }
    static fromAnimalType(animal) {
        return new Animal(animal.name, animal.id, animal.voice, animal.img, animal.step);
    }
    toString() {
        return `name: ${this.name}, id: ${this.id}, voice: ${this.voice}, img: ${this.img}, step: ${this.step}`;
    }
}
//const dictionary: {[key: string]: string} = {}
const runners = {
    dog: {
        name: 'dog',
        id: 'dog',
        voice: 'woof',
        img: 'dog.png',
        step: 50,
    },
    horse: {
        name: 'horse',
        id: 'horse',
        voice: 'neigh',
        img: 'horse.png',
        step: 70,
    },
    duck: {
        name: 'duck',
        id: 'duck',
        voice: 'quack',
        img: 'duck.png',
        step: 40,
    },
    chick: {
        name: 'chick',
        id: 'chick',
        voice: 'cheap',
        img: 'chick.png',
        step: 30,
    },
};
const animals = [];
for (const key in runners) {
    animals.push(Animal.fromAnimalType(runners[key]));
}
export default animals;
const runners2 = {
    dog: {
        name: 'dog',
        id: 'dog',
        voice: 'woof',
        img: 'dog.png',
        step: 50,
    },
    horse: {
        name: 'horse',
        id: 'horse',
        voice: 'neigh',
        img: 'horse.png',
        step: 70,
    },
    duck: {
        name: 'duck',
        id: 'duck',
        voice: 'quack',
        img: 'duck.png',
        step: 40,
    },
    chick: {
        name: 'chick',
        id: 'chick',
        voice: 'cheap',
        img: 'chick.png',
        step: 30,
    },
};
for (let i in runners2) {
    let k = i;
    console.log(runners2[k]);
    let a = runners2[k];
    let aa = runners2[k];
}
