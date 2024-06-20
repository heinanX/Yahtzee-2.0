import ActionBtn from "../02_Components/ActionBtn";


const maxPlayers = 4;

const GameSetup = ({
  numberOfPlayers,
  setNumberOfPlayers,
}: {
  numberOfPlayers: number | null,
  setNumberOfPlayers: React.Dispatch<React.SetStateAction<number | null>>;
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


    </>
  );
};

export default GameSetup;
