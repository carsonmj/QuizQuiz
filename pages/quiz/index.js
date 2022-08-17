import Router, { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { decode } from "html-entities";

import HeadMeta from "../../components/HeadMeta";
import Header from "../../components/header";
import Spinner from "../../components/loading/Spinner";
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
  const [currentIndex, setCurrenctIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(false);
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
      router.push("/result");
      return;
    }

    setCurrenctIndex(currentIndex + 1);
    setProgressIndex(currentIndex + 1);
    setUserAnswer("");
  };

  const handleOptionClick = (e) => {
    const answer = e.target.textContent;
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

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <HeadMeta />
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
                    content: decode(option),
                    progressIndex,
                    currentIndex,
                    correctAnswer: decode(correctAnswer),
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
