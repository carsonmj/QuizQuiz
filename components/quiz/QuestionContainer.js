const QuestionContainer = ({ question }) => {
  return (
    <article className="flex flex-col items-center mt-2">
      <div className="w-40 h-8 rounded-3xl leading-8 text-center bg-[#00c896]" >
        <p className="font-bold text-center text-white">
          Question
        </p>
      </div>
      <div className="mt-8 text-xl text-left text-black">
        {question}
      </div>
    </article>
  );
};

export default QuestionContainer;
