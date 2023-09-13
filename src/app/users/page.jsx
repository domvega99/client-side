"use client"

import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProtectedRoute from 'components/ProtectedRoute';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [userData, setUsers] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleToggle = (id) => {
    setOpen((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {setIsMounted(true);});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users`).then(res =>{
        setUsers(res.data.users)
    })
  }, []);

  const handleRow = (id) => {
    if (!event.target.closest('button')) {
      router.push(`/users/edit/${id}`)
    }
  }

  return (
    <main className='relative'>
      {isMounted && (
      <ProtectedRoute>
        <div className='text-slate-900 text-base font-medium tracking-tight bg-slate-500'>
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
                        <td className='pl-2'>User ID</td>
                        <td>Username</td>
                        <td>First Name</td>
                        <td>Middle Name</td>
                        <td>Last Name</td>
                        <td>Role</td>
                        <td>Location</td>
                        <td>Status</td>
                        <td>Manage</td>
                    </tr>
                </thead>
                <tbody className="text-sm text-neutral-950 border">
                    {userData && userData.map((user) => (
                    <tr key={user.id} className=' hover:bg-slate-500 hover:text-white border cursor-pointer h-10' onClick={() => handleRow(user.id)}>
                        <td className='pl-2'>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.middle_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.role}</td>
                        <td>{user.user_location}</td>
                        <td className='flex'><div className='mt-2 border rounded-md font-semibold text-xs px-3'>{user.stat == 1 ? 'Activated' : 'Deactivated'}</div></td>
                        <td>
                          <button onClick={(e) => { e.stopPropagation(); handleToggle(user.id); }} className='font-semibold px-2 py-1 rounded-md text-xs hover:bg-slate-900'>•••</button>
                          {open === user.id && (
                            <div className='absolute shadow-2xl bg-slate-500 text-white py-1 mt-1 rounded-md'>
                              <ul>
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
