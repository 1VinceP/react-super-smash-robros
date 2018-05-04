import React from 'react';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
        color: '#fff',
    },
    label: {
        marginBottom: '6px'
    }
}

export default function BattleOptions({ selectAttack, atk, pos }) {

    let disabled = false
    if( atk <= 0 ) {
        document.getElementsByClassName( 'advRadio' )[pos].disabled = true
        document.getElementsByClassName( 'advRadio' )[pos].checked = false
    }
    

    return (
        <form className='battleForm' style={styles.form}>
            <label style={styles.label}>
                <input type='radio' name='attackChoice' value='1' onChange={() => selectAttack(1)} />
                Basic Attack
            </label>
            <label style={styles.label}>
                <input className='advRadio' type='radio' name='attackChoice' value='2' onChange={() => selectAttack(2)} />
                Advanced Attack
            </label>
        </form>
    )
}