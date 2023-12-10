import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row shadow-md justify-between bg-slate-50	">
      <p className="font-bold text-4xl p-4">Todo Application</p>
      <Link to={"/addCard"}>
        <button className="font-bold p-4 hover:underline decoration-2">
          Add
        </button>
      </Link>
    </header>
  );
};

export default Header;
