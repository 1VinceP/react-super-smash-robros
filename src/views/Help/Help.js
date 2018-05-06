import React from 'react';
import { Link } from 'react-router-dom';
import './help.css';

export default function Help() {

    return (
        <div className='App-main help'>
            <Link to='/glossary'><button className='h-to-glossary'>Glossary</button></Link>
            <div className='help-container'>
                <h1>Welcome to Super Smash Robros (React Edition)!</h1>
                <p>If you need some help getting started, stick around. Otherwise go ahead and start creating your brawlers! Or if you just want to get into the fight, you can use some of the characters we've created for you!</p>
                <br/>
                <br/>
                <h3>Basic rules and regs</h3>
                <p><b>1) </b>At any time and on any page (yes, including this one!) you may open the character drawer from the bottom of the page by clicking on the "Characters" tab.</p><br/>

                <p><b>1.2) </b>Using the buttons on the bottom of each character, assign them to either the first or the second slots for battle.</p><br/>

                <p><b>2) </b>After customizing your character, it will be added to said drawer and given random strength and health stats. A random special attack will also be added.</p><br/>
                <p><b>3) </b>In the battle screen, your character has a couple of options: Basic Attack, Advanced Attack, and Special Attack.</p><br/>

                <p><b>3.1) </b>The basic attack deals damage equal to that character's current strength. No if's and's or but's.</p><br/>

                <p><b>3.2) </b>The advanced attack deals damage equal to your character's strength, +0-3 bonus damage. But watch out! If you get +3 your character's total strength will go down by 1 point <i>before doing damage</i>, essentially only dealing +2 with a permanent decrease in strength except when this attack reduces your strength to 0. In this case you will deal 3 damage as a last "hurrah" of sorts. Use wisely.</p><br/>

                <p><b>3.3) </b>The special attack is well... special. It has a bonus effect that may or may not even deal damage to your opponent. For instance, Francis' special attack doesn't deal damage but it increases her attack by 1. Please note that special attacks will <i>always</i> take effect after any other attacks</p><br/>

                <p><b>3.4) </b>When someone dies both characters are removed from the field, but injured characters are not healed. The player who's character killed the other earns a point. In the case that both characters die simultaneously, both players are awareded a point.</p>
            </div>
        </div>
    )
}