'use client'
import React, {useState,useEffect} from 'react'
import ProtectedRoute from '../../../../components/ProtectedRoute'

const page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {setIsMounted(true);});

  return (
    <div className='p-10'>
      {isMounted && (<ProtectedRoute>
      <div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>Link to Employee ID</label>
            <input className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
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
            <input placeholder='Email' className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
            <label className='text-red-500 text-xs font-semibold italic'>Email Already Exist</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>User Location</label>
            <input placeholder='Email' className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
            <label className='text-red-500 text-xs font-semibold italic'>Required</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>Role</label>
            <input placeholder='Email' className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
            <label className='text-red-500 text-xs font-semibold italic'>Required</label>
        </div>
        <div className='mt-5'>
            <button className='bg-slate-900 text-white text-sm font-light px-3 py-1 rounded-md hover:bg-slate-800'>Save user</button>
        </div>
      </div>
      </ProtectedRoute>)}
    </div>
    
  )
}

export default page
