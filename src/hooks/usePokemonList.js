import axios from "axios";
import { useState } from "react";

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [createPokemon, setCreatePokemon] = useState(false);
  const [updateList, setUpdateList] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isFetchingPokemon, setIsFetchingPokemon] = useState(false);

  const handleAddPokemon = (pokemon) => {
    setErrorMessage(null);
    setIsFetchingPokemon(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`)
      .then((res) => {
        if (res.data) {
          setPokemonList((prev) => [
            ...prev,
            {
              ...pokemon,
              name: res.data.name,
              id: res.data.id,
              imageUrl: res.data.sprites.front_default,
            },
          ]);
        } else {
          setErrorMessage("Pokemon não encontrado na Pokedex");
        }
      })
      .finally(() => {
        setIsFetchingPokemon(false);
      })
      .catch(() => setErrorMessage("Pokemon não encontrado na Pokedex"));
  };

  const handleRemovePokemon = (pokemonId) => {
    setPokemonList((prev) =>
      prev.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

  const handleUpdatePokemon = (pokemon) => {
    setPokemonList((prev) =>
      prev.map((prevPokemon) =>
        prevPokemon.id === pokemon.id ? pokemon : prevPokemon
      )
    );
  };

  return {
    pokemonList,
    setPokemonList,
    createPokemon,
    setCreatePokemon,
    updateList,
    setUpdateList,
    handleAddPokemon,
    handleRemovePokemon,
    errorMessage,
    isFetchingPokemon,
    handleUpdatePokemon,
  };
};

export default usePokemonList;
