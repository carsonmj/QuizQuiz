import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";

import HeadMeta from "../../components/HeadMeta";
import Spinner from "../../components/loading/Spinner";
import LargeButton from "../../components/button/LargeButton";
import Bar from "../../components/chart/Bar";
import useRouterEvnet from "../../hooks/useRouterEvent";
import { userState } from "../../recoil/user";
import { progressState, updateState } from "../../recoil/question";

const Result = () => {
  const router = useRouter();
  const loading = useRouterEvnet();
  const userResult = useRecoilValue(userState);
  const setShouldUpdateQuestion = useSetRecoilState(updateState);
  const resetUserResult = useResetRecoilState(userState);
  const resetProgressIndex = useResetRecoilState(progressState);

  const handleRetryButtonClick = () => {
    router.push("/");
    resetProgressIndex();
    resetUserResult();
  };

  const handleReviewButtonClick = () => {
    resetProgressIndex();
    if (Object.keys(userResult.wrong).length > 0) {
      router.push("/review");
    } else {
      router.push("/");
    }
  };

  const handleResetButtonClick = () => {
    router.push("/");
    setShouldUpdateQuestion(true);
    resetProgressIndex();
    resetUserResult();
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <HeadMeta
        title="Quiz Result"
        description="Check the result of quiz"
        url="https://quizquiz.vercel.app/result"
        image="https://user-images.githubusercontent.com/54696956/185005465-84ae30de-9a39-42c3-aad0-4d8a42ca5247.png"
      />
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="mb-16 text-xl sm:text-4xl font-bold text-gray">
          Time : {userResult.time}&quot;
        </span>
        <div className="flex flex-col items-center mb-6">
          <span className="text:xl sm:text-2xl mr-2 font-bold text-correct">correct</span>
          <Bar
            percent={`${Object.keys(userResult.correct).length}0%`}
            labelText={Object.keys(userResult.correct).length}
            barStyle="bg-correct"
          />
        </div>
        <div className="flex flex-col items-center mb-6">
          <span className="text:xl sm:text-2xl mr-2 font-bold text-wrong">wrong</span>
          <Bar
            percent={`${Object.keys(userResult.wrong).length}0%`}
            labelText={Object.keys(userResult.wrong).length}
            barStyle="bg-wrong"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-14">
          <LargeButton onClick={handleRetryButtonClick}>
            Try Again
          </LargeButton>
          <LargeButton onClick={handleReviewButtonClick}>
            Review
          </LargeButton>
          <LargeButton onClick={handleResetButtonClick}>
            Reset
          </LargeButton>
        </div>
      </div>
    </>
  );
};

export default Result;
