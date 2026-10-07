import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pets() {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("pawconnect_favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/pets")
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);

  const toggleFavorite = (pet) => {
    let updatedFavorites;

    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === pet.id
    );

    if (alreadyFavorite) {
      updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== pet.id
      );
    } else {
      updatedFavorites = [...favorites, pet];
    }

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "pawconnect_favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const filteredPets = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      type === "All" || pet.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <div className="page-container">
      <h1>Available Pets 🐶🐱</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by name or breed..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="All">All Animals</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>
      </div>

      <div className="pets-container">
        {filteredPets.length === 0 ? (
          <p>No pets found.</p>
        ) : (
          filteredPets.map((pet) => {
            const isFavorite = favorites.some(
              (favorite) => favorite.id === pet.id
            );

            return (
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
                  onClick={() => toggleFavorite(pet)}
                  className="favorite-button"
                >
                  {isFavorite
                    ? "❤️ Remove Favorite"
                    : "🤍 Add to Favorites"}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Pets;