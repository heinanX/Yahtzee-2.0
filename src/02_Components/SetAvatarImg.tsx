import { useState } from "react";
import avatar1 from "../03_assets/hamster01.png";
import avatar2 from "../03_assets/hamster02.png";
import avatar3 from "../03_assets/hamster03.png";
import avatar4 from "../03_assets/hamster04.png";
import { Player } from "../App";

const avatars = [
  { avatar: avatar1, alt: "angry hamster" },
  { avatar: avatar2, alt: "worried hamster" },
  { avatar: avatar3, alt: "heart-eyes hamster" },
  { avatar: avatar4, alt: "cool hamster with shades" },
];

const SetAvatarImg = ({
  player,
  setActivePlayers,
  activePlayers,
}: {
  player: Player;
  setActivePlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  activePlayers: Player[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarSelect = (selectedAvatar: string) => {
    setActivePlayers((players) =>
      players.map((p) =>
        p.name === player.name ? { ...p, avatar: selectedAvatar } : p
      )
    );
    setIsOpen(false);
  };

  const renderAvatarButtons = (
    item: { avatar: string; alt: string },
    i: number
  ) => {
    const isActive = activePlayers.some((p) => p.avatar === item.avatar);

    return (
      <button
        key={i}
        type="button"
        className={`bg-none hover:opacity-50 ${
          isActive ? "opacity-50 cursor-not-allowed" : null
        }`}
        disabled={isActive}
        onClick={() => handleAvatarSelect(item.avatar)}
      >
        <img src={item.avatar} alt={item.alt} />
      </button>
    );
  };

  return (
    <div className="">
      <button
        type="button"
        className="text-2xl"
        onClick={() => setIsOpen(true)}
      >
        +
      </button>
      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-slate-900/70 "
        >
          <div className="p-10 max-w-96 bg-cyan-500 rounded-2xl">
            <h2 className="pb-4 text-3xl">Pick an avatar</h2>
            <div className="grid grid-cols-2 gap-2 ">
              {avatars.map((item, i) => renderAvatarButtons(item, i))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SetAvatarImg;
