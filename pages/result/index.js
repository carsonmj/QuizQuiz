import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";

import LargeButton from "../../components/button/LargeButton";
import Bar from "../../components/chart/Bar";
import { userState } from "../../recoil/user";
import { progressState, updateState } from "../../recoil/question";

const Result = () => {
  const router = useRouter();
  const userResult = useRecoilValue(userState);
  const setShouldUpdateQuestion = useSetRecoilState(updateState);
  const resetUserResult = useResetRecoilState(userState);
  const resetProgressIndex = useResetRecoilState(progressState);

  const handleRetryButtonClick = () => {
    resetProgressIndex();
    resetUserResult();
    router.push("/");
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
    setShouldUpdateQuestion(true);
    resetProgressIndex();
    resetUserResult();
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="mb-16 text-4xl font-bold text-gray">
        Time : {userResult.time}&quot;
      </span>
      <div className="flex flex-col items-center mb-6">
        <span className="text-2xl mr-2 font-bold text-correct">correct</span>
        <Bar
          percent={`${Object.keys(userResult.correct).length}0%`}
          labelText={Object.keys(userResult.correct).length}
          barStyle="bg-correct"
        />
      </div>
      <div className="flex flex-col items-center mb-6">
        <span className="text-2xl mr-2 font-bold text-wrong">wrong</span>
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
  );
};

export default Result;
