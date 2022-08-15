const MainButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className="w-56 h-12 rounded-2xl bg-[#00c896] font-bold text-white">
      {children}
    </button>
  );
};

export default MainButton;
