import React, {useState}from "react";
import { Card } from "semantic-ui-react";


function PokemonCard({...pokee}) {
//console.log(pokee)
  const [displayFront, setDisplayFront] = useState(true)

  function handleClick() {
    setDisplayFront((displayFront) => !displayFront)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={displayFront ? pokee.sprites.front : pokee.sprites.back}alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokee.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokee.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
