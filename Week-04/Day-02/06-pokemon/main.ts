import { Pokemon } from './Pokemon'

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!
// Which pokemon should Ash use?

let pokemonOfAsh: Pokemon[] = initializePokemon();

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

//solution:

function choseEffectivePokemon(competition: Pokemon): string {
    pokemonOfAsh.forEach(element => {
        if (element.isEffectiveAgainst(competition)) {
            return element.name;
        }
    });
    return "none"
}

console.log('I choose you, ', choseEffectivePokemon(wildPokemon));

