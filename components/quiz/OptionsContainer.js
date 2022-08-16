const OptionsContainer = ({ children }) => {
  return (
    <article className="flex justify-center mt-28">
      <div className="w-[32rem]">
        {children}
      </div>
    </article>
  );
};

export default OptionsContainer;
