import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useState, useEffect } from 'react';


export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      axios.get(`http://localhost:5000/users/${id}`)
        .then((res) => {
          setUser(res.data);
          setName(res.data.name);
          setEmail(res.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:5000/users/${id}`, {
        name,
        email,
      })
        .then((res) => {
          navigate('/Getuserspage');
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div>
      <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={res.name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={user.email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
    </div>
  )
}
