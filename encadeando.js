const pets = [
    {
        name: 'Meggie',
        type: 'dog',
        age:12
    },
    {
        name: 'Alice',
        type: 'dog',
        age:5
    },
    {
        name: 'Bolinha',
        type: 'hamster',
        age:1
    },
    {
        name: 'Brioche',
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

const totalagedogs = pets.filter((pet) => {
    return pet.type === 'dog';
}).reduce((total, pet) => {
    return total + pet.age
}, 0);

console.log(totalagedogs);

const totalagehamsters = pets.filter((pet) => {
    return pet.type === 'hamster';
}).reduce((total, pet) => {
    return total + pet.age
}, 0);

console.log(totalagehamsters);
