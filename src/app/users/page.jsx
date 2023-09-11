"use client"

import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProtectedRoute from 'components/ProtectedRoute';

export default function Home() {

  const [userData, setUsers] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {setIsMounted(true);});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users`).then(res =>{
        console.log(res)
        setUsers(res.data.users)

    })
  }, []);


  return (
    <main className=''>
      {isMounted && (
      <ProtectedRoute>
      <div className='w-full'>
        <div>
            <input placeholder='Username'></input>
            <input placeholder='Email'></input>
        </div>
        <table className='w-full border border-solid'>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {userData && userData.map((user, id) => (
                <tr key={id}>
                    <td>{user.username}</td>
                    <td>{user.first_name}</td>
                    <td>{user.email}</td>
                    <td>{user.stat}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
      </ProtectedRoute>)}
    </main>
  )
}
