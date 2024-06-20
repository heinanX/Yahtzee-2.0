const ActionBtn = ( {text, func}: {text:number, func: () => void }) => {
    return (
      <button onClick={func}>
          {text}
      </button>
    )
  }
  
  export default ActionBtn