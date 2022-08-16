import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilRefresher_UNSTABLE, useResetRecoilState } from "recoil";

import MainButton from "../components/button/MainButton";
import { updateState, questionsState, progressState } from "../recoil/question";
import { userState } from "../recoil/user";

const Home = ({ descriptions }) => {
  const router = useRouter();
  const [shouldUpdateQuestion, setShouldUpdateQuestion] = useRecoilState(updateState);
  const refreshQuestion = useRecoilRefresher_UNSTABLE(questionsState);
  const resetUserState = useResetRecoilState(userState);
  const resetProgressState = useResetRecoilState(progressState);

  const handleStartButtonClick = useCallback(() => {
    router.push("/quiz");
    resetUserState();
    setShouldUpdateQuestion(false);
  });

  useEffect(() => {
    resetProgressState();
  });

  useEffect(() => {
    if (shouldUpdateQuestion) {
      refreshQuestion();
    }
  }, [shouldUpdateQuestion]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <h2 className="mb-14 text-7xl text-[#00c896]">QUIZ QUIZ</h2>
      <MainButton onClick={handleStartButtonClick}>
        <p className="text-2xl">
          Start
        </p>
      </MainButton>
      {descriptions?.result?.length > 0 &&
        <article className="mt-14 bg-[#e7faf6] text-[#666666]">
          {descriptions.result.map(({ id, item }) => <div key={id}>{item}</div>)}
        </article>
      }
    </div>
  );
}

export const getStaticProps = async () => {
  let descriptions;

  try {
    if (process.env.NODE_ENV === "development") {
      const res = await fetch(process.env.LOCAL_URL);
      descriptions = await res.json();
    } else {
      const res = await fetch(process.env.PRODUCTION_URL);
      descriptions = await res.json();
    }
  } catch (error) {
    return { props: { code: 500, result: [] } };
  }

  return {
    props: {
      descriptions,
    },
  };
};

export default Home;
