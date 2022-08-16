import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const QuestionController = ({ onClickPrev, onClickNext, disable, index }) => {
  return (
    <>
      {index > 0 && (
        <div
          className="absolute left-4 top-1/2 text-center"
          onClick={onClickPrev}
        >
          <MdArrowBackIos size={"3rem"} color={"#7D7D7D"} />
        </div>
      )}
      <div
        className="absolute right-2 top-1/2 text-center"
        onClick={disable ? () => { } : onClickNext}
      >
        <MdArrowForwardIos size={"3rem"} color={disable ? "#E0DFDF" : "#7D7D7D"} />
      </div>
    </>
  );
};

export default QuestionController;
