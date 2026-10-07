import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to PawConnect 🐾</h1>

      <p>
        Find loving pets waiting for their forever homes.
      </p>

      <Link to="/pets">
        <button>Browse Pets</button>
      </Link>
    </div>
  );
}

export default Home;