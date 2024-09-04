import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddUserCard() {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/users').then((res) => {
      setInfo(res.data);
    }).catch((error) => {
      console.log(error, 'Oops crashed');
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, age };
    axios.post('http://localhost:5000/users', userData)
      .then((res) => {
        console.log(res.data, 'User added successfully!');
        alert('User successfully added!')
        setInfo([...info, res.data]);
        setName('');
        setAge('');
      })
      .catch((error) => {
        console.log(error, 'Error adding user');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>User Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}