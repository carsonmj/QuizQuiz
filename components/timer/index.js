import { useEffect, useState } from "react";
import { MdTimer } from "react-icons/md";
import { useRecoilState } from "recoil";

import useInterval from "../../hooks/useInterval";
import { userState } from "../../recoil/user";

const Timer = ({ isDone }) => {
  const [userResult, setUserResult] = useRecoilState(userState);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const { stop } = useInterval(() => {
    if (seconds === 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else {
      setSeconds(seconds + 1);
    }
  }, 1000);

  useEffect(() => {
    if (isDone) {
      stop();
      setUserResult({
        ...userResult,
        time: `${minutes > 9 ? minutes : "0".concat(minutes)}'${seconds > 9 ? seconds : "0".concat(seconds)}`,
      });
    }
  }, [isDone]);

  return (
    <div className="flex flex-row items-center text-[#666]">
      <MdTimer size={"1.5rem"} />
      <div className="flex flex-row items-center w-19 ml-1 text-lg font-bold">
        <span className="w-8 text-right">{minutes > 9 ? minutes : "0".concat(minutes)}</span>
        <span className="w-2 text-center">:</span>
        <span className="w-6 text-left">{seconds > 9 ? seconds : "0".concat(seconds)}</span>
      </div>
    </div>
  );
};

export default Timer;
