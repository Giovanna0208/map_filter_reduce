//cria um novo array com todos os elementos que 
//passaram no teste da função fornecida

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


const newpets = pets.filter((pet) => {
    return pet.age < 5
});

console.log(newpets);
console.log();
console.log(pets);