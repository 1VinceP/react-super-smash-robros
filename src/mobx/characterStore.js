import { computed, observable, decorate, action } from 'mobx';

import characters from '../data/characters';

class CharacterStore {
    characters = characters

    fighter1 = ''
    fighter2 = ''
    f1Spec = ''
    f2spec = ''

    attack1 = ''
    attack2 = ''

    damageTo1 = ''
    damageTo2 = ''

    bonus1 = ''
    bonus2 = ''

    addCharacter( character ) {
        this.characters = [...this.characters, character ]
    }

    setCharacter( character, pos ) {
        if( pos === 1 ) {
            if( character === this.fighter2 ) {
                this.fighter2 = ''
                this.f2Spec = ''
            }

            this.fighter1 = character
            this.f1Spec = character.special
        }
        
        else if( pos === 2 ) {
            if( character === this.fighter1 ) {
                this.fighter1 = ''
                this.f1Spec = ''
            }

            this.fighter2 = character
            this.f2Spec = character.special
        }
    }
}

decorate( CharacterStore, {
    characters: observable,
    fighter1: observable,
    fighter2: observable,
    addCharacter: action,
    setCharacter: action,
    clearCharacterOne: action,
    clearCharacterTwo: action
} )

let characterStore = new CharacterStore()

export { characterStore };