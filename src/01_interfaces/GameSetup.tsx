import ActionBtn from "../02_Components/ActionBtn";
import PlayerInputForm from "../02_Components/PlayerInputForm";
import { Player } from "../App";

const maxPlayers = 4;

const GameSetup = ({
  activePlayers,
  setActivePlayers
}: {
  activePlayers: Player[];
  setActivePlayers: React.Dispatch<React.SetStateAction<Player[]>>
}) => {

  const setPlayers = (players: number) => {
      setActivePlayers([]);
      [...Array(players)].map((num, i) => {
        const player = {
          name: null,
          avatar: null,
          order: i + 1
        };
        setActivePlayers((prev) => [...prev, player]);
      });

};

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= maxPlayers; i++) {
      buttons.push(
        <ActionBtn key={i} text={i} func={() => setPlayers(i)} />
      );
    }
    return buttons;
  };

  return (
    <>
      <div className="p-2 bg-gradient-to-r from-teal-400 to-purple-600 rounded-xl">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl">
          <h1 className="uppercase">choose number of players</h1>
          <div className="py-4 space-x-4">{renderButtons()}</div>
        </div>
      </div>
      {activePlayers.length != null ? (
        <PlayerInputForm activePlayers={activePlayers} setActivePlayers={setActivePlayers} />
      ) : (
        <></>
      )}
    </>
  );
};

export default GameSetup;
