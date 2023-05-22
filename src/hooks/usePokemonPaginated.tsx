import { useEffect, useRef } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemonPaginated = () => {

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    const loadPokemons = async () => {
        try {
            const resp = await pokemonApi(nextPageUrl.current);
            console.log(resp.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadPokemons();
    }, []);


}
