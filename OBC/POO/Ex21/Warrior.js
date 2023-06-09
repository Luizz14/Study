import { Caracter } from "./Caracter.js"

class Warrior extends Caracter {
    constructor( name, life, strength, defense, shield ) {
        super( name, life, strength, defense )
        
        this.shield = shield
        this.position = 'Attack'
    }

    attack(target) {
        if( this.position === 'Attack' ) {
            super.attack(target)
        }   
    }

    changePosition() {
        if( this.position === 'Attack' ) {
            this.position = 'Defense'
            this.defense += this.shield
        } else {
            this.position = 'Attack'
            this.defense -= this.shield
        }   
    }
}

const bubu = new Warrior('Bulber', 120, 35, 10, 25)

