import { createSignal, For } from "solid-js";
import type { FavPokemon } from "src/interfaces/fovorties-pokemons";
import { FavoritePokemon } from "./FavoritePokemon";

const getLocalStoragePokemons = (): FavPokemon[] => {
    const pokemons = localStorage.getItem('favPokemons');
    return pokemons ? JSON.parse(pokemons) : [];
};


export const  FavoritePokemons = () => {

    const [favoritePokemons, setFavoritePokemons] = createSignal<FavPokemon[]>(getLocalStoragePokemons());

    return (

        <div class="grid grid-cols-2 sm:grid-cols-4">
        <For each={ favoritePokemons()  }>
            {
                favoritePokemons => (
                    <FavoritePokemon pokemon={favoritePokemons} />
                )
            }
        </For>
        </div>
    )

}