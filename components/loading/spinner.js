const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center space-x-2">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-green" role="status" />
    </div >
  );
};

export default Spinner;
