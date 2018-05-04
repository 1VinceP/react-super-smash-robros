export default [
    {
        id: 0,
        name: 'Power up',
        desc: 'Increase the user\'s attack by one point',
        target: 'self',
        stat: 'cStrength',
        amount: 1,
        fight: false
    },
    {
        id: 1,
        name: 'Restore health',
        desc: 'Restore 3 health to self',
        target: 'self',
        stat: 'cHealth',
        amount: 3,
        fight: false
    },
    {
        id: 2,
        name: 'Role change',
        desc: 'Swap the opponent\'s strength and health',
        target: 'enemy',
        stat: 'swap',
        fight: false
    }    
]