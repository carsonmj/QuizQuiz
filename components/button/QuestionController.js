import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const QuestionController = ({ onClickPrev, onClickNext, disable, index }) => {
  return (
    <>
      {index > 0 && (
        <div
          className="w-8 sm:w-16 absolute left-4 top-1/2 text-center"
          onClick={onClickPrev}
        >
          <MdArrowBackIos size={"100%"} color={"#7D7D7D"} />
        </div>
      )}
      <div
        className="w-8 sm:w-16 absolute right-2 top-1/2 text-center"
        onClick={disable ? () => { } : onClickNext}
      >
        <MdArrowForwardIos size={"100%"} color={disable ? "#E0DFDF" : "#7D7D7D"} />
      </div>
    </>
  );
};

export default QuestionController;
