import React from "react";
import CarItem from "./CarItem";
import userImage from "../../assets/all-images/cars-img/bmw-offer.png"; // Replace with the path to the user's image
import Header from "./InternalHeader"; // Import the Header component
const UserProfile = () => {
  // Replace with actual user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    cars: [
      { id: 1, make: "Toyota", model: "Corolla" },
      { id: 2, make: "Honda", model: "Civic" },
      { id: 3, make: "Ford", model: "Focus" },
    ],
  };

  const handleLogout = () => {
    // Implement your logout logic here
    alert("Logout clicked");
  };

  return (
    <div className="container mt-5 mb-5 ">
      <div className="logout-container">
        <button className="btn btn-primary logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Header />
      <div className="card shadow rounded">
        <div className="card-body">
          <img
            src={userImage}
            alt="User"
            className="img-fluid rounded-circle mb-3"
          />
          <div className="user-details">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="card-footer">
          <h3>Cars Rented:</h3>
          <ul className="list-group">
            {user.cars.map((car) => (
              <CarItem key={car.id} make={car.make} model={car.model} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
