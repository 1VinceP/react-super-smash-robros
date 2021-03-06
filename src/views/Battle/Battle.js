import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './battle.css';

import Character from '../../components/Character/Character';

class Battle extends Component {
    state = {
        attack1: '',
        attack2: '',

        damageTo1: '',
        damageTo2: '',

        bonus1: '',
        bonus2: ''
    }

    checkDisabled() {
        const { fighter1, fighter2 } = this.props.characterStore
        const { attack1, attack2 } = this.state

        if( ( fighter1 && fighter2 ) && ( attack1 && attack2 ) )
            return false
        else
            return true
    }

    fight() {
        const { attack1, attack2 } = this.state
        let { fighter1, fighter2 } = this.props.characterStore

        this.setState({
            bonus1: '',
            bonus2: '',
        })

        let fighter1Ability = this.checkAbility( 1 )
        let fighter2Ability = this.checkAbility( 2 )

        let fighter1Attack = this.calcAttack( fighter1, attack1, fighter1Ability, 1 )
        let fighter2Attack = this.calcAttack( fighter2, attack2, fighter2Ability, 2 )

        this.setState({
            damageTo2: fighter1Attack,
            damageTo1: fighter2Attack
        })

        fighter1.cHealth -= fighter2Attack
        fighter2.cHealth -= fighter1Attack

        this.resetForm()
        this.checkDead()
    }

    checkDead() {
        const { fighter1, fighter2 } = this.props.characterStore

        if( fighter1.cHealth <= 0 || fighter2.cHealth <= 0 ) {
            setTimeout(() => {
                this.resetFighters()
            }, 3000);
            fighter1.cHealth <= 0 ? fighter1.dead = 'c-dead' : null
            fighter2.cHealth <= 0 ? fighter2.dead = 'c-dead' : null
        }
    }

    calcAttack( fighter, attack, ability, pos ) {
        
        if( attack === 1 ) {
            return fighter.cStrength
        }
        else if( attack === 2 ) {
            let bonus = Math.floor( Math.random() * 4 )
            if( bonus === 3 ) {
                setTimeout(() => {
                    fighter.cStrength--
                }, 300);
            }

            this.setState({ [`bonus${pos}`]: bonus })

            return fighter.cStrength + bonus
        }
        else if( attack === 3 ) {
            const { fighter1, fighter2, reduceUses } = this.props.characterStore  
            let { effect, uses } = fighter.special
            let self, enemy

            if( pos === 1 ) {
                self = fighter1
                enemy = fighter2
            }
            else {
                self = fighter2
                enemy = fighter1
            }

            setTimeout(() => {
                effect( self, enemy, uses )
            }, 500);

            return 0
        }
    }

    resetFighters() {
        this.resetForm()
        this.clearCharacter( 1 )
        this.clearCharacter( 2 )
    }

    resetForm() {
        let forms = document.getElementsByClassName('battleForm')

        for( let i = 0; i < forms.length; i++ ) {
            forms[i].reset()
        }

        this.setState({ attack1: '', attack2: '' })                    
    }

    clearCharacter( pos ) {
        this.props.characterStore.setCharacter( '', pos )
        this.setState({
            [`damageTo${pos}`]: '',
            [`bonus${pos}`]: ''
        })
    }

    checkAbility( fighter ) {

    }

    selectAttack( num, attack ) {
        this.setState({ [`attack${num}`]: attack })
    }

    render() {
        const { fighter1, fighter2, f1Spec, f2Spec } = this.props.characterStore
        const { bonus1, bonus2, damageTo1, damageTo2 } = this.state

        return (
            <div className='App-main battle'>
                <section className='b-fighter-container'>
                    { fighter1 ? <Character
                        character={fighter1}
                        bonus={bonus1}
                        damage={damageTo1}
                        player={1} 
                        spec={f1Spec}
                        selectAttack={(attack) => this.selectAttack(1, attack)}
                    />
                    : null }
                </section>
                
                <section className='b-buttons'>
                    <button onClick={() => this.fight()} disabled={this.checkDisabled()}>FIGHT</button>
                    <button onClick={() => this.resetFighters()}>RESET</button>
                </section>
                

                <section className='b-fighter-container'>
                    { fighter2 ? <Character
                        character={fighter2}
                        bonus={bonus2}
                        damage={damageTo2}
                        player={2}
                        spec={f2Spec}
                        selectAttack={(attack) => this.selectAttack(2, attack)}
                    />
                    : null }
                </section>
            </div>
        )
    }
}

export default inject('characterStore')(observer(Battle));