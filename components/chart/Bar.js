import { useEffect, useRef } from "react";

const Bar = ({ percent, labelText, barStyle }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      if (barRef.current) {
        barRef.current.classList.add(barStyle);
        barRef.current.style.transition = "width 1s";
        barRef.current.style.width = percent;
      }
    }, 200);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className="w-60 h-4 sm:w-80 sm:h-6 relative max-w-xl rounded-full overflow-hidden">
      <div className="w-full h-full bg-lightgray absolute"></div>
      <div
        className="w-0 h-full absolute text-right"
        ref={barRef}
      >
        {labelText !== null && labelText !== undefined && (
          <p className="w-full p-0.4 pr-2 leading-none text-white text-sm sm:text-lg font-medium">
            {labelText}
          </p>
        )}

      </div>
    </div>
  );
};

export default Bar;
