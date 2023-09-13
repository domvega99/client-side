'use client'
import jwt from 'jsonwebtoken';
import ProtectedRoute from 'components/ProtectedRoute';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { isAuthenticated } from 'services/authService';
import { AuthProvider } from '../../context/AuthContext';
import { useAuth  } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';

export default function Home() {
  const { userData } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {setIsMounted(true);});
  
  return (
    <div>
      {isMounted && (<ProtectedRoute>
        <div>
          <div className='text-slate-900 text-base font-medium tracking-tight bg-slate-500'>
            <Navbar/>
          </div>
          <div className='text-slate-900 text-base font-medium tracking-tight bg-slate-500'>
            <Sidebar/>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
      </ProtectedRoute>)}
    </div>
  )
}
