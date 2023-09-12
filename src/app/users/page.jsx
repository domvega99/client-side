"use client"

import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProtectedRoute from 'components/ProtectedRoute';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export default function Home() {

  const [userData, setUsers] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = (id) => { setOpen((prevState) => ({ ...prevState, [id]: true })); };
  const handleClose = (id) => { setOpen((prevState) => ({ ...prevState, [id]: false }));};

  const handleToggle = (id) => {
    setOpen((prevId) => (prevId === id ? null : id));
  };

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
        <div className='text-slate-900 text-base font-medium tracking-tight p-5'>
          <Navbar/>
        </div>
          <div className='p-5'>
            <div className='flex my-5 items-center'>     
              <input className='border rounded-md p-1 px-2 text-neutral-950 focus:outline-gray-300 text-sm' placeholder='Search user'/>
              <Link href="/users/create" className='ml-2 border border-dotted px-2 rounded-md text-sm font-medium py-1 hover:bg-neutral-100'>Add User</Link>
              <button className='ml-2 border border-dotted px-2 rounded-md text-sm font-medium py-1 hover:bg-neutral-100'>Refresh</button>
            </div>
            <table className='w-full border border-solid'>
                <thead className='text-sm text-neutral-500'>
                    <tr>
                        <td className='pl-2'>Username</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody className="text-sm text-neutral-950 h-28 border">
                    {userData && userData.map((user) => (
                    <tr key={user.id} className=' hover:bg-slate-500 hover:text-white border'>
                        <td className='pl-2'>{user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.email}</td>
                        <td className='flex items-center'><div className='mt-2 border rounded-md font-semibold text-xs px-2'>{user.stat == 1 ? 'Activated' : 'Deactivated'}</div></td>
                        <td>
                          <button onClick={() => handleToggle(user.id)} className='border font-semibold px-5 py-1 rounded-md text-xs hover:bg-slate-900'>Edit</button>
                          {open === user.id && (
                            <div className='absolute shadow-2xl bg-slate-500 text-white py-1 mt-1 rounded-md'>
                              <ul>
                                <li className='hover:bg-slate-900 px-2 cursor-pointer'>Details</li>
                                <li className='hover:bg-slate-900 px-2 cursor-pointer'>Permissions</li>
                                <li className='hover:bg-slate-900 px-2 cursor-pointer'>Reset Password</li>
                                <li className='hover:bg-slate-900 px-2 cursor-pointer'>Activate</li>
                                <li className='hover:bg-slate-900 px-2 cursor-pointer'>Deactivate</li>
                              </ul>
                            </div>
                          )}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>
      </ProtectedRoute>)}
    </main>
  )
}
