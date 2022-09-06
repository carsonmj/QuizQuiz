import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilRefresher_UNSTABLE, useResetRecoilState } from "recoil";

import HeadMeta from "../components/HeadMeta";
import MainButton from "../components/button/MainButton";
import Spinner from "../components/loading/Spinner";
import useRouterEvnet from "../hooks/useRouterEvent";
import { updateState, questionsState, progressState } from "../recoil/question";
import { userState } from "../recoil/user";

const Home = ({ descriptions }) => {
  const router = useRouter();
  const loading = useRouterEvnet();
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
  }, []);

  useEffect(() => {
    if (shouldUpdateQuestion) {
      refreshQuestion();
    }
  }, [shouldUpdateQuestion]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <HeadMeta />
      <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
        <h2 className="mb-14 text-4xl sm:text-5xl md:text-7xl text-green">QUIZ QUIZ</h2>
        <MainButton onClick={handleStartButtonClick}>
          <p className="text-xl sm:text-md lg:text-2xl">
            Start
          </p>
        </MainButton>
        {descriptions?.result?.length > 0 &&
          <article className="mt-14 p-8 rounded-md shadow-lg sm:bg-[#f2faf9] text-[#666666]">
            <p className="mb-4 text-sm sm:text-xl font-bold">Description</p>
            {descriptions.result.map(({ id, item }) => {
              return <div className="mb-1 text-sm" key={id}>◦ {item}</div>
            })}
          </article>
        }
      </div>
    </>
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
