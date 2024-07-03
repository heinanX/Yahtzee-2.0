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
}: {
  player: Player
  setActivePlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-slate-900/70 ">
          <div className="p-10 max-w-96 bg-cyan-500 rounded-2xl">
            <h2 className="pb-4 text-3xl">Pick an avatar</h2>
            <div className="grid grid-cols-2 gap-2 ">
              {avatars.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className="bg-none hover:opacity-50"
                  onClick={()=> console.log(player)
                  }
                >
                  <img src={item.avatar} alt={item.alt} />
                </button>
              ))}
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
