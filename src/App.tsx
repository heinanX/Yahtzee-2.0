import { useState, useEffect } from "react";
import "./App.css";
import GameSetup from "./01_interfaces/GameSetup";

export interface Player {
  name: string | null;
  avatar: string | null;
  order: number;
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeGame, setActiveGame] = useState<boolean>(false);
  const [activePlayers, setActivePlayers] = useState<Player[]>([]);

  useEffect(() => {
    console.log(activePlayers);
    console.log(activePlayers.length);
  }, [activePlayers]);

  return (
    <>
      <div className="p-2">
        {activeGame ? (
          <></>
        ) : (
          <GameSetup
            activePlayers={activePlayers}
            setActivePlayers={setActivePlayers}
          />
        )}
      </div>
    </>
  );
}

export default App;
