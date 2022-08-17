const MainButton = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-40 h-8 sm:w-48 lg:w-56 sm:h-10 lg:h-12 rounded-2xl bg-[#00c896] font-bold text-white"
    >
      {children}
    </button>
  );
};

export default MainButton;
