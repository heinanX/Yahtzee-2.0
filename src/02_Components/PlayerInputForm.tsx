import { useEffect } from "react";
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

  useEffect(() => {
    console.log(activePlayers);
    console.log(activePlayers.length);
  }, []);

  return (
    <form className="flex flex-col w-full py-6">
      {activePlayers.map((player, i) => (
        <section
          key={i}
          className="flex flex-row justify-center w-full gap-6 py-3"
        >
          <input
            type="text"
            placeholder={`Player ${i + 1}`}
            className="w-2/3 px-4 py-2"
            defaultValue={player.name as string}
            onChange={(e) => setFormInput(player, e.target.value)}
          />
          {!player.avatar === null ? (
            <AvatarImg url={player.avatar as string} player={1} />
          ) : (
            <SetAvatarImg player={player} setActivePlayers={setActivePlayers} />
          )}
        </section>
      ))}
    </form>
  );
};

export default PlayerInputForm;
