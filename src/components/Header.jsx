import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="text-black p-2">
        <Link to="/" className="mr-4">
          Home
        </Link>
      </nav>
    </>
  );
}

export default Header;
