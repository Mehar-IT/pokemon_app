import axios from "axios";

export const fetchData = async () => {
    const url =
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
    const res = await axios.get(url);
    const data = res.data.pokemon
    return data;
};
