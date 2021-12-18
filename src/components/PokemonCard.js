import React, {useState}from "react";
import { Card } from "semantic-ui-react";


function PokemonCard({sprites, name, hp}) {
//console.log(pokee)
  const [displayFront, setDisplayFront] = useState(true)

  function handleClick() {
    setDisplayFront((displayFront) => !displayFront)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={displayFront ? sprites.front : sprites.back}alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
