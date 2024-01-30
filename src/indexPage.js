import React, { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard'
import axios from 'axios'
import './style.css'

const IndexPage = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [createPokemon, setCreatePokemon] = useState(false)
  const [updateList, setUpdateList] = useState(0)

  useEffect(() => {
    const request = async () => {
      const { data } = await axios.get('http://localhost:4000/')
      setPokemonList(data)
    }
    setTimeout(request, 1500)
  }, [updateList])

  return (
    <main>
      <h1>Coleção pessoal de POKÉMONS</h1>
      <button onClick={() => setCreatePokemon(true)}>
        Adicionar Pokémon à sua coleção
      </button>
      {createPokemon && (
        <div className="create-card">
          <PokemonCard
            createPokemon={createPokemon}
            setCreatePokemon={setCreatePokemon}
            updateList={updateList}
            setUpdateList={setUpdateList}
          />
        </div>
      )}
      <div className="pokemon-container">
        {pokemonList.map(({ _id, name, imageUrl, evolution }) => (
          <PokemonCard
            key={_id}
            id={_id}
            name={name}
            image={imageUrl}
            evolution={evolution}
            updateList={updateList}
            setUpdateList={setUpdateList}
          />
        ))}
      </div>
    </main>
  )
}

export default IndexPage
