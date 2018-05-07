import specials from './specials';

export default [
    {
        name: 'Charlie',
        tHealth: 4,
        cHealth: 4,
        tStrength: 8,
        cStrength: 8,
        image: 'https://robohash.org/Charlie',
        dead: 'c-alive',
        special: specials.fighter[1]
    },
    {
        name: 'Francis',
        tHealth: 20,
        cHealth: 20,
        tStrength: 2,
        cStrength: 2,
        image: 'https://robohash.org/Francis',
        dead: 'c-alive',
        special: specials.defender[1]
    },
    {
        name: 'Bill',
        tHealth: 10,
        cHealth: 10,
        tStrength: 5,
        cStrength: 5,
        image: 'https://robohash.org/Bill',
        dead: 'c-alive',
        special: specials.mixed[0]
    },
    {
        name: 'Horatio',
        tHealth: 24,
        cHealth: 24,
        tStrength: 3,
        cStrength: 3,
        image: 'https://robohash.org/Horatio',
        dead: 'c-alive',
        special: specials.mixed[2]
    }
];