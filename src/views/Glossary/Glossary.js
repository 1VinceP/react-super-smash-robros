import React from 'react';
import './glossary.css';

import GlossarySection from './GlossarySection';
import specials from '../../data/specials';

export default function Glossary() {

    return (
        <div className='App-main glossary'>
                <GlossarySection type={specials.fighter} />
                <br/>
                <GlossarySection type={specials.defender} />
                <br/>
                <GlossarySection type={specials.mixed} />
        </div>
    )
}