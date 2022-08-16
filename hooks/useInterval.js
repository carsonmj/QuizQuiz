import { useCallback, useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  const intervalRef = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      intervalRef.current = id;
      return () => clearInterval(id);
    }
  }, [delay]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  })

  return { stop };
};

export default useInterval;
