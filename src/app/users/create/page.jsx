'use client'
import React, {useState,useEffect} from 'react'
import ProtectedRoute from '../../../../components/ProtectedRoute'
import axios from 'axios'

const page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [userLocation, setUserLocation] = useState([]);
  const [role, setRole] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [inputData, setinputData] = useState({
    last_name: '',
    middle_name: '',
    first_name: '',
    username: '',
    email: '',
    user_location: '',
    role: '',
  })
  useEffect(() => {setIsMounted(true);});
  const handleInput = (e) => {
    const { name, value } = e.target;
    setinputData({
      ...inputData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/role`).then(res =>{
      setRole(res.data.roles)
    })
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
        const data = {
          last_name: inputData.last_name,
          middle_name: inputData.middle_name,
          first_name: inputData.first_name,
          username: inputData.username,
          email: inputData.email,
          user_location: inputData.user_location,
          role: selectedRole
        }
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8080/api/users/create', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        });
        if(response){
          const data = await response.data;
              console.log('success',data);
        }
  }


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
            <input 
            name="last_name"
            value={inputData.last_name}
            onChange={handleInput}
            className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <label className='text-red-500 text-xs font-semibold italic'>Required</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>Middle Name</label>
            <input 
            name="middle_name"
            value={inputData.middle_name}
            onChange={handleInput}
            className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <label className='text-red-500 text-xs font-semibold italic'>Required</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>First Name</label>
            <input 
            name="first_name"
            value={inputData.first_name}
            onChange={handleInput}
            className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <label className='text-red-500 text-xs font-semibold italic'>Required</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>Username</label>
            <input 
            name="username"
            value={inputData.username}
            onChange={handleInput}
            className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
            <label className='text-red-500 text-xs font-semibold italic'>Required</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>Email</label>
            <input 
            name="email"
            value={inputData.email}
            onChange={handleInput}
            className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
            <label className='text-red-500 text-xs font-semibold italic'>Email Already Exist</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>User Location</label>
            <input 
            name="user_location"
            value={inputData.user_location}
            onChange={handleInput}
            className=' w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-gray-300 text-sm'/>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
            <label className='text-red-500 text-xs font-semibold italic'>Required</label>
        </div>
        <div className='flex flex-col mt-5'>
            <label className='text-sm font-semibold mb-1'>Role</label>
            <select onChange={(e) => setSelectedRole(e.target.value)} className='w-1/2 border rounded-md p-1 pl-2 text-neutral-950 focus:outline-none text-sm'>
              {role && role.map((item) => (
                <option 
                name="role_name"
                className='focus:outline-none' key={item.id} value={item.role_name}>{item.role_name}</option>
              ))}
            </select>
        </div>
        <div className='mt-5'>
            <button 
            onClick={handleSubmit}
            className='bg-slate-900 text-white text-sm font-light px-3 py-1 rounded-md hover:bg-slate-800'>Save user</button>
        </div>
      </div>
      </ProtectedRoute>)}
    </div>
    
  )
}

export default page
