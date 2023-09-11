'use client'
import Image from 'next/image'
import ProtectedRoute from 'components/ProtectedRoute';
import Link from 'next/link';
import { logout } from 'services/authService';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlelogout = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (logout()) {
      router.push('/auth/login');
    }
    setLoading(false)
  }
  return (
    <div>
      <div>
        <nav className=' bg-teal-700 text-neutral-200 p-5'>
          <ul className='flex font-light w-1/2 justify-between'>
            <li>Role</li>
            <li>Home</li>
            <li>Location</li>
            <li>User</li>
            <li><button type='button' onClick={handlelogout}>Logout</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
