'use client'

import React, { useState, useEffect } from 'react'
import { isAuthenticated } from 'services/authService';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorFields, setErrorFields] = useState({});

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/');
    }
    
  }, []);

  const handleLogin = async (e) => {
      e.preventDefault();
      const requestData = {username, password};
      try {
        const response = await axios.post('http://localhost:8080/api/users/login', 
          requestData, {
            headers: {
              'Content-Type': 'application/json',
            },
        });

        if (response) {
          const data = await response.data;
          
          if (data.password == 'password' || data.password_reset != null || data.require_reset == true){
            // localStorage.setItem('token', data.token);
            window.location.href = '/auth/changepass';
            console.log('Login successful:', data);
          } 
          if (data.status === 1) {
            localStorage.setItem('token', data.token);
            window.location.href = '/';
            console.log('Login successful:', data);
          } else {
            const error = await response.data;
            setErrorFields('')
            setError(error.message);
            console.error('Login error:', error);
          }

        } 
      } catch (error) {
        const errorfields = error.response
        setError('')
        setErrorFields(errorfields.data.message);
        console.error(errorfields.data.message);
      }
    };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' w-11/12 rounded-sm border-2 border-solid'>
        <div className='bg-red-400 h-1/3 text-white p-3 flex justify-center items-center'>
          Development Businesss Automation System
        </div>
        <div className='flex justify-center'>
          <div className=' bg-red-500 text-white p-2 rounded-full mt-2 text-xs'>
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
          <form onSubmit={handleLogin}>
            <div>
              <div className=' font-semibold text-neutral-500 mb-2'>Username</div>
              <div className='mb-2'>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'/>
              </div>
            </div>
            <div className='mb-2'>
              <div className=' font-semibold text-neutral-500 mb-2'>Password</div>
              <div>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'/>
              </div>
            </div>
            <div>
            <button className="shadow bg-purple-400 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                    type="Submit">
              Login
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
