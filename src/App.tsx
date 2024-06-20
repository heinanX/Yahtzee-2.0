import { useState, useEffect } from "react";
import "./App.css";
import GameSetup from "./01_interfaces/GameSetup";

function App() {
  const [activeGame, setActiveGame] = useState<boolean>(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number | null>(null);
  const [players, setPlayers] = useState<[]>([]);

  useEffect(() => {
    console.log(numberOfPlayers);
  }, [numberOfPlayers]);

  return (
    <>
      <div className="p-2">
        {activeGame ? (
          <></>
        ) : (
          <GameSetup
            numberOfPlayers={numberOfPlayers}
            setNumberOfPlayers={setNumberOfPlayers}
          />
        )}
      </div>
    </>
  );
}

export default App;
