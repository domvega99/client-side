'use client'
import React from 'react'
import { isAuthenticated } from 'services/authService';
import ProtectedRoute from '../../../../components/ProtectedRoute';
const page = () => {
  
  return (
      <div className='flex justify-center items-center h-screen'>
        <div className=' w-11/12 rounded-sm border-2 border-solid'>
          <div className='bg-red-400 h-1/3 text-white p-3 flex justify-center items-center'>
            Set your new password
          </div>
          <div className='p-3'>
            <div>
              <div className=' font-semibold text-neutral-500 mb-2'>New Password</div>
              <div className='mb-2'>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200" 
                    type="password"
                    placeholder='Password'/>
              </div>
            </div>
            <div className='mb-2'>
              <div className=' font-semibold text-neutral-500 mb-2'>Confirm Password</div>
              <div>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200" 
                    type="password"
                    placeholder='Password'/>
              </div>
            </div>
            <div>
            <button className="shadow bg-purple-400 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                    type="Submit">
              Submit
            </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default page
