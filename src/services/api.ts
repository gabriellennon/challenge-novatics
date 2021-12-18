import axios from "axios";

//General information to all requests
export const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/',
})