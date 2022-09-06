import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { decode } from "html-entities";

import HeadMeta from "../../components/HeadMeta";
import Spinner from "../../components/loading/Spinner";
import Option from "../../components/quiz/Option";
import OptionsContainer from "../../components/quiz/OptionsContainer";
import QuestionController from "../../components/button/QuestionController";
import QuestionContainer from "../../components/quiz/QuestionContainer";
import ReviewHeader from "../../components/header/ReviewHeader";
import useRouterEvnet from "../../hooks/useRouterEvent";
import { userState } from "../../recoil/user";
import { questionsState } from "../../recoil/question";

const Review = () => {
  const router = useRouter();
  const loading = useRouterEvnet();
  const questions = useRecoilValue(questionsState).results;
  const userResult = useRecoilValue(userState);
  const wonrgAnswerdQuestions = Object.keys(userResult.wrong);
  const [currentIndex, setCurrenctIndex] = useState(0);

  const handlePrevButtonClick = () => {
    setCurrenctIndex(currentIndex - 1);
  };

  const handleNextButtonClick = () => {
    if (currentIndex === wonrgAnswerdQuestions.length - 1) {
      setCurrenctIndex(0);
      return;
    }

    setCurrenctIndex(currentIndex + 1);
  };

  const handleMypageButtonClick = () => {
    router.push("/result");
  };

  const getOptionState = (content) => {
    const wrong = userResult.wrong[wonrgAnswerdQuestions[currentIndex]];
    const correct = questions[wonrgAnswerdQuestions[currentIndex]].correct_answer;

    if (content === correct) {
      return "correct";
    }

    if (content === wrong) {
      return "wrong"
    }

    return "default";
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <HeadMeta
        title="Quiz Review"
        description="Check the wrong answers"
        url="https://quizquiz.vercel.app/review"
        image="https://user-images.githubusercontent.com/54696956/185005686-321bab42-bc32-4f9a-99fb-80d96bb71c45.png"
      />
      {wonrgAnswerdQuestions.length > 0 && (
        <>
          <ReviewHeader
            onClick={handleMypageButtonClick}
            current={currentIndex + 1}
            total={wonrgAnswerdQuestions.length}
          />
          <QuestionController
            onClickPrev={handlePrevButtonClick}
            onClickNext={handleNextButtonClick}
            disable={false}
            index={currentIndex}
          />
          <QuestionContainer
            question={decode(questions[wonrgAnswerdQuestions[currentIndex]].question)}
          />
          <OptionsContainer>
            {questions[wonrgAnswerdQuestions[currentIndex]].options.map((option, index) => {
              return (
                <Option
                  key={index}
                  content={decode(option)}
                  state={getOptionState(option)}
                  canClick={false}
                />
              );
            })}
          </OptionsContainer>
        </>
      )}
    </>
  );
};

export default Review;
