import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🐾 PawConnect</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/adopt">Adopt</Link>
      </div>
    </nav>
  );
}

export default Navbar;