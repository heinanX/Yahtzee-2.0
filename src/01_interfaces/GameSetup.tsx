import ActionBtn from "../02_Components/ActionBtn";
import PlayerInputForm from "../02_Components/PlayerInputForm";
import { Player } from "../App";

const maxPlayers = 4;

const GameSetup = ({
  activePlayers,
  setActivePlayers,
}: {
  activePlayers: Player[];
  setActivePlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}) => {

  const createPlayer = (order: number) => {
    const player = {
      name: null,
      avatar: null,
      order: order,
    };
    return player;
  };

  const setPlayers = (players: number) => {
    const change = players - activePlayers.length;

    if (change > 0) {
      let inc = activePlayers.length;
      [...Array(change)].map((_, i) => {
        inc = inc + 1;
        const player = activePlayers.length == 0 ? createPlayer(i + 1) : createPlayer(inc);
        setActivePlayers((prev) => [...prev, player]);
      });
    } else {
      const start = activePlayers.length - Math.abs(change);
      setActivePlayers((prev) => {
        const newArr = [...prev];
        newArr.splice(start, Math.abs(change));
        return newArr;
      });
    }
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= maxPlayers; i++) {
      buttons.push(<ActionBtn key={i} text={i} func={() => setPlayers(i)} />);
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
        <PlayerInputForm
          activePlayers={activePlayers}
          setActivePlayers={setActivePlayers}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default GameSetup;
