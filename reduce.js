//executa uma função para cada elemento retornando
//um único valor para cada elemento
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnumbers = numbers.reduce((total, number) => {
    return total + number
}, 0);

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

const newpets = pets.reduce((total, pet) => {
    return total + pet.age
}, 0);

console.log(newpets);