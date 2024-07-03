const ActionBtn = ({ text, func }: { text: number; func: () => void }) => {
  return (
    <button onClick={func} className="text-xl bg-purple-600 hover:bg-teal-400">
      {text}
    </button>
  );
};

export default ActionBtn;
