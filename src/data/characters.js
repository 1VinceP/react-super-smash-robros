import specials from './specials';

export default [
    {
        name: 'Charlie',
        tHealth: 4,
        cHealth: 4,
        tStrength: 8,
        cStrength: 8,
        image: 'http://robohash.org/Charlie',
        dead: 'c-alive',
        special: specials[2]
    },
    {
        name: 'Francis',
        tHealth: 20,
        cHealth: 20,
        tStrength: 2,
        cStrength: 2,
        image: 'http://robohash.org/Francis',
        dead: 'c-alive',
        special: specials[0]
    },
    {
        name: 'Bill',
        tHealth: 10,
        cHealth: 10,
        tStrength: 5,
        cStrength: 5,
        image: 'http://robohash.org/Bill',
        dead: 'c-alive',
        special: specials[1]
    }
];