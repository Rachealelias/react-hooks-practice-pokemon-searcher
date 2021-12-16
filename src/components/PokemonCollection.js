import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";


function PokemonCollection({pokemon}) {

const pokemonDisplay = pokemon.map((pokee) => (
  //<PokemonCard key={pokee.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} />
   <PokemonCard key={pokee.id} {...pokee}  />
   
   ))
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonDisplay}
</Card.Group>
  );
}

export default PokemonCollection;
