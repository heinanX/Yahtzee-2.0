import ActionBtn from "../02_Components/ActionBtn";
import AvatarImg from "../02_Components/AvatarImg";
import SetAvatarImg from "../02_Components/SetAvatarImg";
//import avatar from "../03_assets/hamster01.png";
import { Player } from "../App";

const maxPlayers = 4;

const GameSetup = ({
  numberOfPlayers,
  setNumberOfPlayers,
  activePlayers,
}: {
  numberOfPlayers: number | null;
  setNumberOfPlayers: React.Dispatch<React.SetStateAction<number | null>>;
  activePlayers: Player[];
}) => {
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= maxPlayers; i++) {
      buttons.push(
        <ActionBtn key={i} text={i} func={() => setNumberOfPlayers(i)} />
      );
    }
    return buttons;
  };

  return (
    <>
      <div className="bg-gradient-to-r from-teal-400 to-purple-600 p-2 rounded-xl">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
          <h1 className="uppercase">choose number of players</h1>
          <div className="space-x-4 py-4">{renderButtons()}</div>
        </div>
      </div>
      {numberOfPlayers != null ? (
        <form className="py-6 flex flex-col w-full">
          {activePlayers.map((player, i) => (
            <section
              key={i}
              className="py-3 flex flex-row gap-6 w-full justify-center"
            >
              <input
                type="text"
                placeholder={`Player ${i + 1}`}
                className="w-2/3 px-4 py-2"
              />
              {!player.avatar === null ? 
              <AvatarImg url={player.avatar as string} player={1} />
              :
              <SetAvatarImg />
            }
            </section>
          ))}
          {/* <input type="text" placeholder="setName" className="w-2/3 px-4 py-2" />
        <AvatarImg url={avatar} player={1} /> */}
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default GameSetup;
