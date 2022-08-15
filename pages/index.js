import { useRouter } from "next/router";
import { useCallback } from "react";

import MainButton from "../components/MainButton";

const Home = ({ descriptions }) => {
  const router = useRouter();
  const handleStartButtonClick = useCallback(() => {
    router.push("/quiz");
  });

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

  if (process.env.NODE_ENV === "development") {
    const res = await fetch("http://localhost:3000/api/description");
    descriptions = await res.json();
  }

  return {
    props: {
      descriptions,
    },
  };
};

export default Home;
