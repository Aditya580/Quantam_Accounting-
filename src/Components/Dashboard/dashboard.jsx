// filepath: /d:/web project/freelance/consultant/Header/Header Project/src/Components/Dashboard/dashboard.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext"; // Ensure correct path
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase"; // Ensure correct path to your Firebase config
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; // Import Firestore functions
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "leads")); // Replace with your collection name
      const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(dataList);
      console.log(dataList);
    };

    fetchData();
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Redirect after logout
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "leads", id)); // Replace with your collection name
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      alert("Delete failed: " + error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard - Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;