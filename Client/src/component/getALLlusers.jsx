import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function GetAllUsers() {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userId, setUserId] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/users').then((res) => {
      setInfo(res.data);
    }).catch((error) => {
      console.log(error, 'Oops crashed');
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.log(res.data, 'User deleted successfully!');
        setInfo(info.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.log(error, 'Error deleting user');
      });
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setUserId(user._id);
    setName(user.name);
    setAge(user.age);
  };

  const handleUpdate = () => {
    const updatedUser = { name, age };
    axios.put(`http://localhost:5000/users/${userId}`, updatedUser)
      .then((res) => {
        console.log(res.data, 'User updated successfully!');
        setInfo(info.map((user) => user._id === userId ? res.data : user));
        setIsEditing(false);
        setName('');
        setAge('');
      })
      .catch((error) => {
        console.log(error, 'Error updating user');
      });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName('');
    setAge('');
  };
console.log("This is the object" ,info)
  return (
    <div>
      <div className="w3-container">
        <h2>Users</h2>
        {info.map((user, index) => (
          <div key={index} className="w3-card-4" style={{ width: "300px", height: "100px", margin:'10px' }}>
            <header className="w3-container w3-blue">
              {user.name}<br></br>
              
              {user.age}
            </header>
            
            <div className="w3-container">
              <button className="w3-button w3-red" onClick={() => handleDelete(user._id)}>Delete</button>
              <Link to={`edit/${user.id}`}>
                <button className="w3-button w3-green">Edit</button>
              </Link>
            </div>
            <footer className="w3-container w3-blue"></footer>
          </div>
        ))}
      </div>
      {isEditing && (
        <div className="w3-container">
          <h2>Edit User</h2>
          <form>
            <div className="w3-group">
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="w3-group">
              <label>Age:</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <button className="w3-button w3-green" onClick={handleUpdate}>Update</button>
            <button className="w3-button w3-red" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}