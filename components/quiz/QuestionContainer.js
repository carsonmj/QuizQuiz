const QuestionContainer = ({ question }) => {
  return (
    <article className="flex flex-col items-center mt-2">
      <div className="w-40 h-8 rounded-3xl leading-8 text-center bg-green" >
        <p className="font-bold text-center text-white">
          Question
        </p>
      </div>
      <div className="mt-8 w-[70%] text-sm sm:text-xl text-center text-black text-darkgray">
        {question}
      </div>
    </article>
  );
};

export default QuestionContainer;
