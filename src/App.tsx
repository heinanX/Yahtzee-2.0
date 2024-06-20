import { useState, useEffect } from "react";
import "./App.css";
import GameSetup from "./01_interfaces/GameSetup";

export interface Player {
  name: string | null;
  avatar: string | null;
}

function App() {
  const [activeGame, setActiveGame] = useState<boolean>(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number | null>(null);
  const [activePlayers, setActivePlayers] = useState<Player[]>([]);

  const setPlayers = () => {

    [...Array(numberOfPlayers)].map((i) => {
      const player = {
        name: null,
        avatar: null,
      };
      setActivePlayers((prev) => [...prev, player]);
    });

  };

  useEffect(() => {
    console.log(numberOfPlayers);
    console.log(activePlayers);
    if (!activeGame) {
      setActivePlayers([])
      setPlayers()
    }
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
            activePlayers={activePlayers}
          />
        )}
      </div>
    </>
  );
}

export default App;
