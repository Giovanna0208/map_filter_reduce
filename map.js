//chama o callback para cada elemento e devolve 
//um novo array com a mesma quantidade de itens
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const newnumbers = numbers.map((number) => {
    return number * 100
});

console.log(newnumbers);

const pets = [
    {
        name: 'Meggie',
        type: 'dog',
        age:12
    },
    {
        name: 'Bolinha',
        type: 'hamster',
        age:1
    },
    {
        name: 'Nanico',
        type: 'fish',
        age:3
    },
    {
        name: 'Marla',
        type: 'fish',
        age:2
    }
];

const newpets = pets.map((pet) => pet.name);

console.log(newpets);
