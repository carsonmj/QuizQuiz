import HomeButton from "../button/HomeButton";
import Timer from "../timer";

const Header = ({ onClickHome }) => {
  return (
    <header className="flex flex-row justify-between mt-6 px-4">
      <HomeButton onClick={onClickHome}>
        home
      </HomeButton>
      <Timer />
    </header>
  );
};

export default Header;
