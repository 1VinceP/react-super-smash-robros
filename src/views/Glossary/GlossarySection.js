import React from 'react';
import _ from 'lodash';

export default function GlossarySection({ type }) {

    let ordered = _.orderBy( type, ['name'], ['asc'] )

    let mapped = ordered.map( special => {
        return (
            <div key={special.id}>
                <div className='g-title'>
                    <h3>{special.name}</h3>
                    <p>Target: {special.target}</p>
                    <p>Uses: {special.uses}</p>
                </div>
                <p className='g-desc'>{special.desc}</p>
                <hr/>
            </div>
        )
    } )

    return (
        <div className='g-container'>
            {mapped}
        </div>
    )
}