const Option = ({ content, onClick, state, canClick }) => {
  const getOptionStyles = () => {
    if (state === "correct") {
      return "w-full h-16 rounded-lg mb-2 px-3 border-4 bg-correct border-correct";
    }

    if (state === "wrong") {
      return "w-full h-16 rounded-lg mb-2 px-3 border-4 bg-wrong border-wrong";
    }

    if (canClick) {
      return "w-full h-16 rounded-lg mb-2 px-3 border-4 hover:bg-darkgreen hover:border-green bg-default border-default";
    }

    return "w-full h-16 rounded-lg mb-2 px-3 border-4 bg-default border-default";
  };
  const style = getOptionStyles();

  return (
    <div
      className={style}
    >
      <p
        className="h-full leading-[3.5rem] text-lg font-bold text-left text-white"
        onClick={canClick ? onClick : () => { }}
      >
        {content}
      </p>
    </div>
  );
};

export default Option;
