import { Player } from "../App";
import AvatarImg from "./AvatarImg";
import SetAvatarImg from "./SetAvatarImg";

const PlayerInputForm = ({
  activePlayers,
  setActivePlayers,
}: {
  activePlayers: Player[];
  setActivePlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}) => {
  
  const setFormInput = (player: Player, e: string) => {
    setActivePlayers((prev) => {
      return prev.map((p) =>
        p.order === player.order ? { ...p, name: e } : p
      );
    });
  };

  return (
    <form className="flex flex-col w-full py-6">
      {activePlayers.map((player, i) => (
        <section
          key={i}
          className="flex flex-row justify-center w-full gap-6 py-3"
        >
          <input
            type="text"
            placeholder={player.name as string}
            className="w-2/3 px-4 py-2"
            
            onChange={(e) => setFormInput(player, e.target.value)}
          />
          {player.avatar ? (
            <AvatarImg url={player.avatar as string} player={player.order} />
          ) : (
            <SetAvatarImg player={player} setActivePlayers={setActivePlayers} activePlayers={activePlayers} />
          )}
        </section>
      ))}
    </form>
  );
};

export default PlayerInputForm;
