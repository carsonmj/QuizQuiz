import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilRefresher_UNSTABLE, useResetRecoilState } from "recoil";

import MainButton from "../components/button/MainButton";
import { updateState, questionsState } from "../recoil/question";
import { userState } from "../recoil/user";

const Home = ({ descriptions }) => {
  const router = useRouter();
  const [shouldUpdateQuestion, setShouldUpdateQuestion] = useRecoilState(updateState);
  const refreshQuestion = useRecoilRefresher_UNSTABLE(questionsState);
  const resetUserState = useResetRecoilState(userState);

  const handleStartButtonClick = useCallback(() => {
    router.push("/quiz");
    resetUserState();
    setShouldUpdateQuestion(false);
  });
  useEffect(() => {
    if (shouldUpdateQuestion) {
      refreshQuestion();
    }
  }, [shouldUpdateQuestion]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <p className="mb-14 text-7xl text-[#00c896]">QUIZ QUIZ</p>
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
      const res = await fetch("http://localhost:3000/api/description");
      descriptions = await res.json();
    } else {
      descriptions = [
        { id: 0, item: "Each time you will be given 10 questions on a random topic." },
        { id: 1, item: "You can move on to the next question if you have selected an answer." },
        { id: 2, item: "You can choose the answer to the question from among 4 options." },
        { id: 3, item: "When you have completed all the questions, you can check the statistics of the questions." },
        { id: 4, item: "You can solve the question again or check the review notes." },
      ];
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
