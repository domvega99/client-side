'use client'
import Image from 'next/image'
import ProtectedRoute from 'components/ProtectedRoute';
import Link from 'next/link';
import { logout } from 'services/authService';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function Home() {
  const router = useRouter();

  const handlelogout = async (e) => {
    e.preventDefault();
    if (logout()) {
      router.push('/login');
    }
  }
  
  return (
    <ProtectedRoute>
      <Navbar />
      <main>
        <div>
          <div>
            <h1>Dashboard Page (Protected)</h1>
            <p>This page is protected and can only be accessed by authenticated users.</p>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  )
}
