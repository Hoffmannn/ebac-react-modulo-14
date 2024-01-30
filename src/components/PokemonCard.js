import React, { useState } from "react";
import "./PokemonCard.css";

export const PokemonCard = ({
  id,
  name,
  image,
  evolution,
  createPokemon,
  setCreatePokemon,
  handleAddPokemon,
  handleRemovePokemon,
  handleUpdatePokemon,
}) => {
  const [editPokemon, setEditPokemon] = useState(createPokemon ?? false);
  const [nameInput, setNameInput] = useState(name ?? "");
  const [evolutionInput, setEvolutionInput] = useState(
    evolution?.toString() ?? ""
  );

  const handleChangePokemon = () => {
    if (createPokemon) {
      handleAddPokemon({
        name: nameInput,
        evolution: Number(evolutionInput),
      });
      setCreatePokemon(false);
    } else {
      handleUpdatePokemon({
        id: id,
        name: nameInput,
        imageUrl: image,
        evolution: Number(evolutionInput),
      });
      setEditPokemon(false);
    }
  };

  return (
    <div className="pokemon-card">
      {editPokemon ? (
        <div>
          <label>
            Nome{createPokemon ? " ou índice na Pokedex" : ""}:
            <input
              type="text"
              onChange={(e) => setNameInput(e.target.value)}
              value={nameInput}
            />
          </label>

          <label>
            Estágio de evolução:
            <input
              type="number"
              onChange={(e) => setEvolutionInput(e.target.value)}
              value={evolutionInput}
            />
          </label>
          <button
            onClick={() =>
              createPokemon ? setCreatePokemon(false) : setEditPokemon(false)
            }
          >
            Cancela
          </button>
          <button onClick={handleChangePokemon}>Confirma</button>
        </div>
      ) : (
        <>
          <h2 className="pokemon-card-name">{name}</h2>
          <img src={image} alt={name} />
          <h3>Estágio de evolução: {evolution}</h3>
          <button onClick={() => setEditPokemon(true)}>Alterar</button>
          <button onClick={() => handleRemovePokemon(id)}>Remover</button>
        </>
      )}
    </div>
  );
};
