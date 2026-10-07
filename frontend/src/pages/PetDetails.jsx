import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pets")
      .then((response) => response.json())
      .then((data) => {
        const selectedPet = data.find(
          (item) => item.id === Number(id)
        );

        setPet(selectedPet);
      })
      .catch((error) => {
        console.error("Error fetching pet:", error);
      });
  }, [id]);

  if (!pet) {
    return (
      <div className="page-container">
        <h1>Pet not found 🐾</h1>
        <Link to="/pets">← Back to Pets</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="pet-card">
        <h1>{pet.name} 🐾</h1>

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
          {pet.name} is looking for a loving forever home.
        </p>

        <Link to="/adopt">
          <button>Adopt {pet.name}</button>
        </Link>

        <br />

        <Link to="/pets">← Back to Pets</Link>
      </div>
    </div>
  );
}

export default PetDetails;