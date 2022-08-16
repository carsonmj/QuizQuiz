const LargeButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className="w-64 h-8 mb-3 rounded-2xl bg-green font-bold text-white">
      {children}
    </button>
  );
};

export default LargeButton;
