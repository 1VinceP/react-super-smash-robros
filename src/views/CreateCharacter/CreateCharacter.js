import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './createCharacter.css';

import specials from '../../data/specials';

class CreateCharacter extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            color: '',
            role: '',
            roboSet: '',
            sprite: ''
        }
    }

    handleChange( e ) {
        this.setState({
            name: e.target.value
        })
    }

    addCharacter() {
        const { name, color, roboSet, role } = this.state

        if( !name || !color || !role ) {
            alert( 'Please make a choice for every option' )
            return;
        }

        let tHealth, tStrength, special
        let specialNum = Math.floor( Math.random() * specials[role].length )

        if( role === 'fighter' ) {
            tHealth = Math.floor( Math.random() * 8 + 2 )
            tStrength = Math.floor( Math.random() * 5 + 5 )
        }
        else if( role === 'defender' ) {
            tHealth = Math.floor( Math.random() * 15 + 15 )
            tStrength = Math.floor( Math.random() * 4 + 1 )
        }
        else if( role === 'mixed' ) {
            tHealth = Math.floor( Math.random() * 10 + 8 )
            tStrength = Math.floor( Math.random() * 2 + 4 )
        }

        // special = specials[role][specialNum]
        special = specials[role][0]

        let newCharacter = {
            name,
            tHealth,
            cHealth: tHealth,
            tStrength,
            cStrength: tStrength,
            color: `radial-gradient(white, ${color})`,
            image: `http://robohash.org/${name}${roboSet}`,
            dead: 'c-alive',
            special
        }

        this.props.characterStore.addCharacter( newCharacter )
        this.setState({
            name: '',
            role: '',
            color: '',
            sprite: ''
        })
    }

    setRole( role ) {
        this.setState({ role })
    }

    selectRole() {
        let roles = document.getElementsByClassName('role')

        for( let i = 0; i < roles.length; i++ ) {
            if( roles[i].id === this.state.role )
                document.getElementById( this.state.role ).style.border = '3px solid #0f0'
            else
                document.getElementById( roles[i].id ).style.border = '1px solid #000'
        }
    }

    setColor( color ) {
        this.setState({ color })
    }

    selectColor() {
        let classes = document.getElementsByClassName('color')

        for( let i = 0; i < classes.length; i++ ) {
            if( classes[i].id === this.state.color )
                document.getElementById( this.state.color ).style.border = '3px solid #0f0';
            else
                document.getElementById( classes[i].id ).style.border = '1px solid #000';
        }
    }

    setSprite( sprite ) {
        let roboSet;

        switch( sprite ) {
            case 'robot': roboSet = ''; break;
            case 'monster': roboSet = '?set=set2'; break;
            case 'head': roboSet = '?set=set3'; break;
            case 'cat': roboSet = '?set=set4'; break;
            default: roboSet = ''; break
        }

        this.setState({ sprite, roboSet })
    }

    selectSprite() {
        let sprites = document.getElementsByClassName('sprite')

        for( let i = 0; i < sprites.length; i++ ) {
            if( sprites[i].id === this.state.sprite )
                document.getElementById( this.state.sprite ).style.border = '3px solid #0f0';
            else
                document.getElementById( sprites[i].id ).style.border = '1px solid #000';
        }
    }

    render() {
        this.selectRole()
        this.selectColor()
        this.selectSprite()

        return (
            <div className='App-main'>
                <div className='cc-container'>
                    <input onChange={e => this.handleChange(e)} value={this.state.name} placeholder='enter a name' />
                    
                    <section className='roles'>
                        <button className='role' id='fighter' onClick={() => this.setRole('fighter')}>Fighter</button>
                        <button className='role' id='defender' onClick={() => this.setRole('defender')}>Defender</button>
                        <button className='role' id='mixed' onClick={() => this.setRole('mixed')}>Mixed</button>
                    </section>

                    <section className='colors'>
                        <div className='color' id='green' onClick={() => this.setColor('green')} />
                        <div className='color' id='yellow' onClick={() => this.setColor('yellow')} />
                        <div className='color' id='red' onClick={() => this.setColor('red')} />
                        <div className='color' id='blue' onClick={() => this.setColor('blue')} />
                    </section>

                    <section className='sprites'>
                        <div className='sprite' id='robot' onClick={() => this.setSprite('robot')}>
                            <img src='https://robohash.org/robot' alt='robot avatar' />
                        </div>
                        <div className='sprite' id='monster' onClick={() => this.setSprite('monster')}>
                            <img src='https://robohash.org/monster?set=set2' alt='monster avatar' />
                        </div>
                        <div className='sprite' id='head' onClick={() => this.setSprite('head')}>
                            <img src='https://robohash.org/head?set=set3' alt='head avatar' />
                        </div>
                        <div className='sprite' id='cat' onClick={() => this.setSprite('cat')}>
                            <img src='https://robohash.org/cat?set=set4' alt='cat avatar' />
                        </div>
                    </section>

                    <button onClick={() => this.addCharacter()}>Save character</button>

                    <section className='cc-explain'>
                        <p>Give your character a name and some spunk! Select the background you would like, and then the avatar style that fits your fancy (actual results may vary).</p>
                        <br/>
                        <p>After clicking the "save character" button, a character will be created and given random attack and health values based on the role you have selected for it.</p>
                    </section>
                </div>
                
            </div>
        )
    }
}

export default inject('characterStore')(observer(CreateCharacter));