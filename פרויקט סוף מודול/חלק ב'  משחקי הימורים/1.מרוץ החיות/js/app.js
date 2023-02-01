import animals from './runners.js';
import { capitalize, random, shuffle } from './utils.js';
const box = document.getElementById('box');
const btnStart = document.querySelector('#btn-start');
const findAnimalById = (id) => animals.find((a) => a.id === id);
const chooseAnimal = (id) => {
    let animal = findAnimalById(id);
    if (!animal)
        return;
    //toggleChosenState
    animals.forEach((e) => (e.chosen = false));
    animal.chosen = true;
    //toggleChosenCss
    document.querySelectorAll('#box div').forEach((e) => {
        if (e.id != id) {
            e.classList.remove('chosen-animal');
        }
        else {
            e.classList.add('chosen-animal');
        }
    });
};
const initRunners = () => {
    box.replaceChildren();
    for (const animal of animals) {
        const animalDiv = document.createElement('div');
        animalDiv.id = animal.id;
        animalDiv.addEventListener('click', (e) => {
            if (gameIsOn) {
                return;
            }
            gameIsOn = true;
            let id = e.currentTarget.id;
            chooseAnimal(id);
            const audio = new Audio(`./media/${animal.voice}.wav`);
            audio.play();
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0; // Works as audio stop
                startRunning();
            }, 2000);
            //audio.addEventListener('ended', startRunning)
        });
        const img = document.createElement('img');
        img.src = `images/${animal.img}`;
        img.classList.add('animal-image');
        animalDiv.appendChild(img);
        box.appendChild(animalDiv);
        animal.translateX = 0;
    }
};
let id = 0;
let gameIsOn = false;
btnStart.addEventListener('click', () => {
    if (gameIsOn)
        return;
    initRunners();
});
function startRunning() {
    let i = 0;
    let j = 0;
    id = setInterval(() => {
        if (i == animals.length) {
            i = 0;
            j++;
        }
        let animal = animals[i];
        const trans = animal.translateX - animal.step / 10 - random(4, 100);
        let e = document.getElementById(animals[i].id);
        e.style.transform = `translateX(${trans}px)`;
        animal.translateX = trans;
        console.log(animal, e.getBoundingClientRect().x);
        if (e.getBoundingClientRect().x <= 0) {
            const win = animal.chosen;
            alert(`You ${win ? 'Win' : 'Lose'}, The winning animal is the ${capitalize(animal.name)}`);
            shuffle(animals);
            initRunners();
            animal.chosen = false;
            clearInterval(id);
            gameIsOn = false;
        }
        i += 1;
    }, 50);
}
let animal = {
    cat: 'miaoo',
};
for (const key in animal) {
    let k = key;
    console.log(k, animal[k]);
}
Object.keys(animal).forEach((k) => {
    let key = k;
    console.log(k, animal[key]);
});
const obj = { name: 'Tom', age: 30 };
const keys = Object.keys(obj);
console.log(keys); // 👉️ ['name', 'age']
const values = Object.values(obj);
console.log(values); // 👉️ ['Tom', 30]
class Point {
    x;
    y;
    constructor(xs, y) {
        if (typeof xs === 'string') {
            let s = xs.split(',');
            this.x = Number(s[0]);
            this.y = Number(s[1]);
        }
        else {
            this.x = xs;
            this.y = y;
        }
    }
}
class Contact {
    firstName;
    lastName;
    birthday;
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    toString() {
        return `${this.firstName}`;
    }
}
const c1 = { firstName: 'Moe', lastName: '', birthday: new Date() };
Object.setPrototypeOf(c1, Contact.prototype); // Now obj is a Contact instance
class Employee {
    id;
    name;
    salary;
    constructor(jid, name, salary) {
        if (typeof jid === 'object' /*can also check that all keys match */) {
            console.log('is');
            this.id = jid.id;
            this.name = jid.name;
            this.salary = jid.salary;
        }
        else {
            console.log('not is');
            this.id = jid;
            this.name = name;
            this.salary = salary;
        }
    }
}
const e1 = new Employee(2, 'hi', 100);
const e2 = new Employee(JSON.parse(JSON.stringify(e1)));
console.log(e1, e2);
const employee = {
    id: 1,
    name: 'James Doe',
    salary: 100,
}; // 👈️ use const assertion
Object.setPrototypeOf(employee, Employee.prototype);
alert(employee instanceof Employee);
