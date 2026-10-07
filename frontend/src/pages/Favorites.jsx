import { Link } from "react-router-dom";
import { useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("pawconnect_favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (pet) => pet.id !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "pawconnect_favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <div className="page-container">
      <h1>My Favorite Pets ❤️</h1>

      {favorites.length === 0 ? (
        <div>
          <p>You haven't added any pets to your favorites yet.</p>

          <br />

          <Link to="/pets">
            <button>Browse Pets</button>
          </Link>
        </div>
      ) : (
        <div className="pets-container">
          {favorites.map((pet) => (
            <div className="pet-card" key={pet.id}>
              <h2>🐾 {pet.name}</h2>

              <p>
                <strong>Type:</strong> {pet.type}
              </p>

              <p>
                <strong>Breed:</strong> {pet.breed}
              </p>

              <p>
                <strong>Age:</strong> {pet.age} years
              </p>

              <p>
                <strong>Location:</strong> {pet.location}
              </p>

              <Link to={`/pets/${pet.id}`}>
                <button>View Details</button>
              </Link>

              <button
                onClick={() => removeFavorite(pet.id)}
                className="favorite-button"
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;   