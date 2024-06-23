import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">About Me </Link>
      <Link to="/portfolio">Portfolio </Link>
      <Link to="/contact">Contact </Link>
      <a href="/Resume.pdf" target="_blank">
        Resume{" "}
      </a>
    </nav>
  );
};

export default Nav;
