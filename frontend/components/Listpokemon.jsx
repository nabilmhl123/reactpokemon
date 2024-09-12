import { useEffect, useState } from "react";

const ListPokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(data => {
            setPokemons(data.results);
        })
        .catch(error => console.error('Erreur lors de la récupération des données', error));
    }, []);

    return (
        <div>
            {pokemons.map(pokemon => (
                <div key={pokemon.name}>
                    <h3>{pokemon.name}</h3>
                
                </div>
            ))}
        </div>
    );
};

export default ListPokemon;