import React from 'react';
import { inject, observer } from 'mobx-react';
import './tray.css';

import Character from '../Character/Character';

function Tray({ tray, handleTray }) {
    const { characters } = this.props.characterStore;

    let mappedCharacters = characters.map( (character, i) => {
        return <Character key={i} character={character} />
    } )

    return (
        <div className={`tray ${tray}`}>
            <div className='tray-tab' onClick={handleTray}><p>Characters</p></div>
            <section className='tray-characters'>
                {mappedCharacters}
            </section>
        </div>
    )
}

export default inject('characterStore')(observer(Tray));