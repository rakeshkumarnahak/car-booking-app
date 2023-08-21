import {React,useState,useEffect} from "react";
import CarItem from "./CarItem";
import userImage from "../../assets/all-images/cars-img/bmw-offer.png"; // Replace with the path to the user's image
import Header from "./InternalHeader"; // Import the Header component
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserProfile = () => {
  const history = useNavigate();

  const [user, setUser] = useState({});
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/api/user')
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));

    axios.get('/api/cars')
      .then((response) => setCars(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/logout'); // Make sure the route matches your backend
      history.push('/login'); // Redirect to the login page
    } catch (error) {
      console.error(error);
    }
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