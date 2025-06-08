import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // hook for navigation
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };

    loadUser();
  }, [id]);

  if (!user) {
    return <div>Loading user details...</div>;
  }

  return (
    <div className="container">
      <h2>User Details</h2>
      <ul>
        <li><strong>ID:</strong> {user.id}</li>
        <li><strong>Name:</strong> {user.name}</li>
        <li><strong>Username:</strong> {user.username}</li>
        <li><strong>Email:</strong> {user.email}</li>
      </ul>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default ViewUser;
