export default {
    fighter: [
        {
            id: 'f1',
            name: 'Power Up',
            desc: 'Increase the user\'s attack by one point',
            target: 'Self',
            uses: 3,
            effect: function( self, enemy ) {
                self.cStrength++
            }
        },
        {
            id: 'f2',
            name: 'Copy Health',
            desc: 'Set this character\'s health to be equal to the enemy\'s health',
            target: 'Self',
            uses: 1,
            effect: function( self, enemy ) {
                self.cHealth = enemy.cHealth
            }
        },
        {
            id: 'f3',
            name: 'Close Combat',
            desc: 'Increase user\'s attack by 5, but reduce health by 3',
            target: 'Self',
            uses: 1,
            effect: function( self, enemy ) {
                self.cHealth -= 3
                self.cStrength += 5
            }
        }
    ],

    defender: [
        {
            id: 'd1',
            name: 'Restore Health',
            desc: 'Restore 3 health to self',
            target: 'Self',
            uses: 2,
            effect: function( self, enemy ) {
                self.cHealth += 3
                if( self.cHealth > self.tHealth )
                    self.cHealth = self.tHealth
            }
        },
        {
            id: 'd2',
            name: 'Power Hit',
            desc: 'Does damage equal to your attack +2',
            target: 'Self',
            uses: 2,
            effect: function( self, enemy ) {
                enemy.cHealth -= self.cStrength + 2
            }
        },
        {
            id: 'd3',
            name: 'Hide in Shell',
            desc: 'Increase health by 10 points but reduce strength by 1',
            target: 'Self',
            uses: 1,
            effect: function( self, enemy ) {
                self.cHealth += 10
                self.cStrength -= 1
            }
        }
    ],

    mixed: [
        {
            id: 'm1',
            name: 'Role Change',
            desc: 'Swap the opponent\'s strength and health',
            target: 'Enemy',
            uses: 4,
            effect: function( self, enemy ) {
                let str = enemy.cStrength
                let tStr = enemy.tStrength

                enemy.cStrength = enemy.cHealth
                enemy.cHealth = str
                enemy.tStrength = enemy.tHealth
                enemy.tHealth = tStr
            }
        },
        {
            id: 'm2',
            name: 'Booster',
            desc: 'Increase the opponents attack by 2 and your health by 6.',
            target: 'Both',
            uses: 3,
            effect: function( self, enemy ) {
                self.cHealth += 6
                enemy.cStrength += 2
            }
        },
        {
            id: 'm3',
            name: 'Level Grounds',
            desc: 'Return you and your opponent\'s strength and health back to their original values (swapped values will remain swapped.',
            target: 'Both',
            uses: 2,
            effect: function( self, enemy ) {
                self.cHealth = self.tHealth
                self.cStrength = self.tStrength

                enemy.cHealth = enemy.tHealth
                enemy.cStrength = enemy.tStrength
            }
        }
    ]
}