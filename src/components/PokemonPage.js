import React,{useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  console.log(pokemon)

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data=> {
      setPokemon(data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

  const handleSearch = pokemon.filter((poke) =>
  poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} onSearch={setSearch}/>
      <br />
      <PokemonCollection  pokemon={pokemon}/>
    </Container>
  );
}

export default PokemonPage;
