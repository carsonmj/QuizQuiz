import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { decode } from "html-entities";

import Header from "../../components/header";
import Option from "../../components/quiz/Option";
import OptionsContainer from "../../components/quiz/OptionsContainer";
import QuestionController from "../../components/button/QuestionController";
import QuestionContainer from "../../components/quiz/QuestionContainer";
import { questionsState, progressState } from "../../recoil/question";
import { userState } from "../../recoil/user";
import { getOptionState } from "../../utils/helper";

const Quiz = () => {
  const router = useRouter();
  const questions = useRecoilValue(questionsState);
  const [progressIndex, setProgressIndex] = useRecoilState(progressState);
  const [userResult, setUserResult] = useRecoilState(userState);
  const [currentIndex, setCurrenctIndex] = useState(8);
  const [userAnswer, setUserAnswer] = useState("");
  const correctAnswer = questions.results[currentIndex].correct_answer;

  const init = () => {
    setProgressIndex(0);
    setCurrenctIndex(0);
    setUserAnswer("");
  };

  const isNextButtonDisabled = () => {
    if (currentIndex < progressIndex) {
      return false;
    }

    return !Boolean(userAnswer);
  };

  const handleHomeButtonClick = useCallback(() => {
    router.push("/");
    init();
  });

  const handlePrevButtonClick = () => {
    setCurrenctIndex(currentIndex - 1);
    setUserAnswer("");
  };

  const handleNextButtonClick = () => {
    if (questions.results.length - 1 === currentIndex) {
      // move to result page
      router.push("/result");
      return;
    }

    setCurrenctIndex(currentIndex + 1);
    setProgressIndex(currentIndex + 1);
    setUserAnswer("");
  };

  const handleOptionClick = (e) => {
    const answer = e.target.innerText;
    setUserAnswer(answer);

    if (correctAnswer !== answer) {
      setUserResult({
        ...userResult,
        wrong: { ...userResult.wrong, [currentIndex]: answer }
      });
    } else {
      setUserResult({
        ...userResult,
        correct: { ...userResult.correct, [currentIndex]: answer }
      });
    }
  };

  return (
    <>
      <Header
        onClickHome={handleHomeButtonClick}
        isDone={userAnswer && questions?.results?.length - 1 === currentIndex}
      />
      <QuestionController
        onClickPrev={handlePrevButtonClick}
        onClickNext={handleNextButtonClick}
        disable={isNextButtonDisabled()}
        index={currentIndex}
      />

      {questions?.results?.length > 0 && (
        <>
          <p className="text-center text-gray">{`${currentIndex + 1} / ${questions?.results?.length}`}</p>
          <QuestionContainer
            question={decode(questions.results[currentIndex].question)}
          />
          <OptionsContainer>
            {questions.results[currentIndex].options.map((option, index) => {
              return (
                <Option
                  key={index}
                  content={decode(option)}
                  onClick={handleOptionClick}
                  state={getOptionState({
                    content: option,
                    progressIndex,
                    currentIndex,
                    correctAnswer,
                    userAnswer,
                    userResult
                  })}
                  canClick={!Boolean(userAnswer)}
                />
              );
            })}
          </OptionsContainer>
        </>
      )}
    </>
  );
};

export default Quiz;
