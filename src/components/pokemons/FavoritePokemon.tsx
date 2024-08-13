import { createSignal, Show, type Component } from "solid-js";
import type { FavPokemon } from "src/interfaces/fovorties-pokemons";

interface FavoritePokemonProps {
    pokemon: FavPokemon;
}


export const FavoritePokemon : Component<FavoritePokemonProps> = (props) => {
    
    const { pokemon } = props;

    const [isVisible, setIsVisible] = createSignal(true);

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deletePokemon = () => {
        const favPokemons = JSON.parse(localStorage.getItem('favPokemons') || '[]');
        const newPokemons = favPokemons.filter((p: FavPokemon) => p.id !== pokemon.id);
        localStorage.setItem('favPokemons', JSON.stringify(newPokemons));
        setIsVisible(false);
    };
    
    return (
        
        <Show when={isVisible()}>
        <div class="flex flex-col justify-center items-center">        
            <a href={`/pokemons/${pokemon.name}`}>
            <img src={img} alt={pokemon.name} class="w-24 h-24"
             style={`view-transition-name: ${pokemon.name}-image`}
             />
            <p>
                # {pokemon.id} - {pokemon.name}
            </p>
            </a>
            <button onClick={deletePokemon} class="text-red-400">
                Delete
            </button>
        </div>
        </Show>
        
    );
};