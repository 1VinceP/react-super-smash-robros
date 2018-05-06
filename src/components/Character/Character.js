import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './character.css';

class Character extends Component {
    state = {
        isDead: false
    }

    checkStatuses() {
        const { cHealth, tHealth, cStrength, tStrength } = this.props.character
        let healthStatus = 'c-healthy'
        let strengthStatus = 'c-healthy'

        if( cHealth > tHealth )
            healthStatus = 'c-extra' 
        else if( cHealth < tHealth )
            healthStatus = 'c-hurt' 
        else
            healthStatus = 'c-healthy' 

        if( cStrength > tStrength )
            strengthStatus = 'c-extra' 
        else if( cStrength < tStrength )
            strengthStatus = 'c-hurt' 
        else
            strengthStatus = 'c-healthy' 

        return { healthStatus, strengthStatus }
    }

    setCharacter( pos ) {
        this.props.characterStore.setCharacter( this.props.character, pos )
    }

    renderButtons() {
        const { player, character } = this.props
        const { fighter1, fighter2 } = this.props.characterStore

        let button1
        let button2

        if( !player ) {
            button1 = !fighter1 && character.dead === 'c-alive'
                ? <button className='c-button1' onClick={() => this.setCharacter(1)}>1</button>
                : <button className='c-button1' disabled onClick={() => this.setCharacter(1)}>1</button>
            button2 = !fighter2 && character.dead === 'c-alive'
                ? <button className='c-button2' onClick={() => this.setCharacter(2)}>2</button>
                : <button className='c-button2' disabled onClick={() => this.setCharacter(2)}>2</button>

            return (
                <section className='c-buttons'>
                    {button1}
                    {button2}
                </section>
            )
        }
        else
            return <section className='c-not-buttons'>Player {player}</section>
    }

    renderAttacks() {
        const { selectAttack, character, player, spec  } = this.props
        let advDisable = false

        character.cStrength <= 0 ? advDisable = true : advDisable = false

        if( player ) {
            return <form className='c-form battleForm'>
                            <label className='c-label'>
                                <input type='radio' name='attackChoice' value='1' onClick={() => selectAttack(1)} />
                                Basic Attack
                            </label>
                            <label className='c-label'>
                                <input className='advRadio' type='radio' name='attackChoice' value='2' onClick={() => selectAttack(2)} disabled={advDisable} />
                                Advanced Attack
                            </label>
                            <label>
                                <input type='radio' name='attackChoice' value='3' onClick={() => selectAttack(3)} />
                                Special Attack ({spec.uses})
                            </label>
                        </form>
        }
    }

    renderInfo() {
        const { spec, player } = this.props
        if( spec && player ) {
            return <div className='c-info'>{spec.desc}</div>
        }
        
    }

    render() {
        const { name, image, color, cHealth, cStrength, dead } = this.props.character
        const { bonus, damage } = this.props

        const { strengthStatus, healthStatus } = this.checkStatuses()

        return (
            <div className={dead}>
                <div className='c-name'>{name}</div>

                <section className='c-picture' style={{background: color}}>
                    { image && <img src={image} alt='character' /> }
                    { damage && <div className='c-damage'>-{damage}</div> }
                    <div className={`c-strength ${strengthStatus}`}>{cStrength}</div>
                    { bonus && <div className='c-bonus'>+{bonus}</div> }
                    <div className={`c-health ${healthStatus}`}>{cHealth}</div>
                </section>

                { this.renderButtons() }
                { this.renderAttacks() }
                { this.renderInfo() }
            </div>
        )
    }
}

export default inject('characterStore')(observer(Character));