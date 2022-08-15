import { MdHomeFilled } from 'react-icons/md';

const HomeButton = ({ iconSize, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-24 h-8 rounded-2xl bg-[#7d60f2] font-bold text-white"
    >
      <div className="flex flex-row justify-evenly">
        <MdHomeFilled size={"1.5rem"} />
        {children}
      </div>
    </button>
  );
};

export default HomeButton;
