import { useState } from "react";
import { useRef } from "react";

export default function Player() {

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const playerName = useRef();

  function handleClick(){
    // here, playerName.current.value means that input.target.value, so whatever we entered in that input field,
    // we took its value and gave it to enteredPlayerName. which we are using to show the user's name
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/* we setted ref = playerName here, which means playerName = input element here */}
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}