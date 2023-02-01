export interface AnimalType {
  name: string
  id: string
  voice: string
  img: string
  step: number
}

export class Animal implements AnimalType {
  name: string
  id: string
  voice: string
  img: string
  step: number
  chosen: boolean = false
  translateX: number = 0

  constructor(
    name: string,
    id: string,
    voice: string,
    img: string,
    step: number
  ) {
    this.id = id
    this.name = name
    this.img = img
    this.step = step
    this.voice = voice
  }
  static fromAnimalType(animal: AnimalType) {
    return new Animal(
      animal.name,
      animal.id,
      animal.voice,
      animal.img,
      animal.step
    )
  }

  toString() {
    return `name: ${this.name}, id: ${this.id}, voice: ${this.voice}, img: ${this.img}, step: ${this.step}`
  }
}
//const dictionary: {[key: string]: string} = {}
const runners: {[key: string]: AnimalType} = {
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
}

const animals: Animal[] = []
for (const key in runners) {
  animals.push(Animal.fromAnimalType(runners[key]))
}

export default animals





const runners2= {
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
}
//let a = Object.values(runners2).map(x=>x) as AnimalType[]
type RKeys = keyof typeof runners2
for(let i in runners2){
  let k = i as RKeys
  console.log(runners2[k])
  let a = runners2[k] 
  let aa = runners2[k] as AnimalType
}