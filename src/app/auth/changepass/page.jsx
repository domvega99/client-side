'use client'
import React, { useEffect, useState } from 'react'
// import { isAuthenticated } from 'services/authService';
// import ProtectedRoute from '../../../../components/ProtectedRoute';
import jwt from 'jsonwebtoken';
import axios from 'axios';
const page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorFields, setErrorFields] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {setIsMounted(true);});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (typeof localStorage !== 'undefined') {
        const token = localStorage.getItem('token');
        const decodedToken = jwt.decode(token);
        const userId = decodedToken.user.id
      
        const requestData = {
          password: password,
          user_id: userId,
          confirm: password2
        }
      
        const response = await axios.put('http://localhost:8080/api/users/changepass', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response){
          const data = await response.data;
          if (data.status === 0){
            setErrorFields('');
            setError(data.message);
          } else {
            if (data.error == 'NOT MATCH'){
              console.log(data.msg);
              setError(data.msg);
            } else {
              window.location.href = '/';
              console.log('success',data);
            }
          }
        } else {
          console.error(response.message)
          setError(response.message)
        }
      } 
    }catch (error) {
      const errorfields = await error.response;
      setError('');
      setErrorFields(errorfields.data.message);
      console.error(errorfields.data.message);
    }
}

  return (
      <div className='flex justify-center items-center h-screen'>
        {isMounted && (
        // <ProtectedRoute>
        <div className=' w-11/12 rounded-sm border-2 border-solid'>
          <div className='bg-red-400 h-1/3 text-white p-3 flex justify-center items-center'>
            Set your new password
          </div>
          <div className='flex justify-center'>
            <div className=' text-red-500 text-xs italic mt-5 px-10'>
              {error}
              {errorFields && (
                <div>
                  {Object.values(errorFields).map((item, index) => (
                      <p key={index}>{item}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='p-3'>
            <div>
              <div className=' font-semibold text-neutral-500 mb-2'>New Password</div>
              <div className='mb-2'>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200" 
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
            <div className='mb-2'>
              <div className=' font-semibold text-neutral-500 mb-2'>Confirm Password</div>
              <div>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200" 
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPassword2(e.target.value)}/>
              </div>
            </div>
            <div>
            <button className="shadow bg-purple-400 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                    type="Submit"
                    onClick={handleSubmit}>
              Submit
            </button>
            </div>
          </div>
        </div>
        // </ProtectedRoute>
        )}
      </div>
  )
}

export default page
