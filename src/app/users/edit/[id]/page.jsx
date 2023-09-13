'use client'
import React, {useState,useEffect} from 'react'
import ProtectedRoute from '../../../../../components/ProtectedRoute'
import Navbar from '../../../../../components/Navbar';
import Link from 'next/link';

const page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {setIsMounted(true);});

  return (
    <div>
      {isMounted && (<ProtectedRoute>
      <div className='text-slate-900 text-base font-medium tracking-tight bg-slate-500'>
        <Navbar/>
      </div>
      <div className='p-8'>
        <h1 className=' text-3xl font-semibold'>Settings</h1>
        <p className="text-slate-500 dark:text-gray-400 mt-2 text-base">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <div className=' border border-b-gray-300'></div>
      <div className='flex m-10'>
        <div className='w-1/6'>
          <ul>
            <li className='p-2 pl-4 w-full hover:bg-zinc-100 rounded-sm'><Link href='/' className='text-base w-full font-semibold'>Profile</Link></li>
            <li className='p-2 pl-4 w-full hover:bg-zinc-100 rounded-sm'><Link href='/' className='text-base w-full font-semibold'>Permission</Link></li>
            <li className='p-2 pl-4 w-full hover:bg-zinc-100 rounded-sm'><Link href='/' className='text-base w-full font-semibold'>Configuration</Link></li>
          </ul>
        </div>
        <div className='ml-10'>
          <div className='flex flex-col'>
              <label className='text-sm font-semibold mb-1'>Link to Employee ID</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              Link your Employee ID
              </p>
          </div>
          <div className='flex flex-col mt-5'>
              <label className='text-sm font-semibold mb-1'>Last Name</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <label className='text-red-500 text-xs font-semibold italic'>Required</label>
          </div>
          <div className='flex flex-col mt-5'>
              <label className='text-sm font-semibold mb-1'>Middle Name</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <label className='text-red-500 text-xs font-semibold italic'>Required</label>
          </div>
          <div className='flex flex-col mt-5'>
              <label className='text-sm font-semibold mb-1'>First Name</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <label className='text-red-500 text-xs font-semibold italic'>Required</label>
          </div>
          <div className='flex flex-col mt-5'>
              <label className='text-sm font-semibold mb-1'>Username</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
              </p>
              <label className='text-red-500 text-xs font-semibold italic'>Required</label>
          </div>
          <div className='flex flex-col mt-5'>
              <label className='text-sm font-semibold mb-1'>Email</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
              </p>
              <label className='text-red-500 text-xs font-semibold italic'>Email Already Exist</label>
          </div>
          <div className='flex flex-col mt-5'>
              <label className='text-sm font-semibold mb-1'>User Location</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
              </p>
              <label className='text-red-500 text-xs font-semibold italic'>Required</label>
          </div>
          <div className='flex flex-col mt-5'>
              <label className='text-sm font-semibold mb-1'>Role</label>
              <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
              </p>
              <label className='text-red-500 text-xs font-semibold italic'>Required</label>
          </div>
          <div className='mt-5'>
              <button className='bg-slate-900 text-white text-sm font-light px-3 py-1 rounded-md hover:bg-slate-800'>Save user</button>
          </div>
        </div>
      </div>
      </ProtectedRoute>)}
    </div>
    
  )
}

export default page
