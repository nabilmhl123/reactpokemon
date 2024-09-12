import { useEffect, useState } from "react";

const ListPokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(response => response.json())
            .then(data => {
                // Obtenez les détails de chaque Pokémon pour les images
                const pokemonDetailsPromises = data.results.map(pokemon =>
                    fetch(pokemon.url).then(response => response.json())
                );

                Promise.all(pokemonDetailsPromises)
                    .then(pokemonDetails => {
                        setPokemons(pokemonDetails);
                    })
                    .catch(error => console.error('Erreur lors de la récupération des détails des Pokémon', error));
            })
            .catch(error => console.error('Erreur lors de la récupération des données', error));
    }, []);

    return (
        <div className="pokemon-container">
            {pokemons.map(pokemon => (
                <div key={pokemon.name} className="pokemon-card">
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
                </div>
            ))}
        </div>
    );
};

export default ListPokemon;