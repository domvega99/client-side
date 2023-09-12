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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {setOpen(true);};

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
        <ul className="navbar">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Subsystems</Link></li>
          <li><Link href="#">Role</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><button type='button' onClick={handlelogout}>Logout</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
