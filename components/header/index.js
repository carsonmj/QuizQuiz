import HomeButton from "../button/HomeButton";
import Timer from "../timer";

const Header = ({ onClickHome, isDone }) => {

  return (
    <header className="flex flex-row justify-between mt-6 mb-8 px-4">
      <HomeButton onClick={onClickHome}>
        home
      </HomeButton>
      <Timer isDone={isDone} />
    </header>
  );
};

export default Header;
