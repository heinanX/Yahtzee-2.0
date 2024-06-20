const ActionBtn = ({ text, func }: { text: number; func: () => void }) => {
  return (
    <button onClick={func} className="bg-purple-600 hover:bg-teal-400 text-xl">
      {text}
    </button>
  );
};

export default ActionBtn;
