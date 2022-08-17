const OptionsContainer = ({ children }) => {
  return (
    <article className="flex justify-center mt-12 sm:mt-28">
      <div className="w-52 sm:w-[24rem] md:w-[32rem]">
        {children}
      </div>
    </article>
  );
};

export default OptionsContainer;
