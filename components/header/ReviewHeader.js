import Link from "next/link";
import { MdPerson } from "react-icons/md";

const ReviewHeader = ({ onClick, current, total }) => {

  return (
    <header className="flex flex-row justify-between mt-6 mb-8 px-4">
      <Link href="/result">
        <div
          onClick={onClick}
          className="w-28 h-8 rounded-2xl p-0.5 bg-[#7d60f2] font-bold text-white cursor-pointer"
        >
          <div className="flex flex-row justify-evenly">
            <MdPerson size={"1.5rem"} />
            <a>my page</a>
          </div>
        </div>
      </Link>
      <p className="text-center text-gray">
        <b>review</b>
        {` ${current} / ${total}`}
      </p>
    </header>
  );
};

export default ReviewHeader;
