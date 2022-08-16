import { MdHomeFilled } from "react-icons/md";

const HomeButton = ({ iconSize = "1.5rem", onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-24 h-8 rounded-2xl bg-[#7d60f2] font-bold text-white"
    >
      <div className="flex flex-row justify-evenly">
        <MdHomeFilled size={iconSize} />
        {children}
      </div>
    </button>
  );
};

export default HomeButton;
