import React from "react";
import { PokemonCard } from "./components/PokemonCard";
import "./App.css";
import usePokemonList from "./hooks/usePokemonList";

const IndexPage = () => {
  const {
    pokemonList,
    handleAddPokemon,
    handleRemovePokemon,
    createPokemon,
    setCreatePokemon,
    updateList,
    setUpdateList,
    errorMessage,
    isFetchingPokemon,
    handleUpdatePokemon,
  } = usePokemonList();

  return (
    <main>
      <h1>Coleção pessoal de POKÉMONS</h1>
      <div className="add-pokemon">
        <button onClick={() => setCreatePokemon(true)}>
          Adicionar Pokémon à sua coleção
        </button>
        {isFetchingPokemon && <p>Analisando Pokedex...</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      {createPokemon && (
        <div className="create-card">
          <PokemonCard
            createPokemon={createPokemon}
            setCreatePokemon={setCreatePokemon}
            updateList={updateList}
            setUpdateList={setUpdateList}
            handleAddPokemon={handleAddPokemon}
            handleRemovePokemon={handleRemovePokemon}
          />
        </div>
      )}
      <div className="pokemon-container">
        {pokemonList.map(({ id, name, imageUrl, evolution }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            image={imageUrl}
            evolution={evolution}
            updateList={updateList}
            setUpdateList={setUpdateList}
            handleAddPokemon={handleAddPokemon}
            handleRemovePokemon={handleRemovePokemon}
            handleUpdatePokemon={handleUpdatePokemon}
          />
        ))}
      </div>
    </main>
  );
};

export default IndexPage;
