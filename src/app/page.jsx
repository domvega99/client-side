'use client'

import ProtectedRoute from 'components/ProtectedRoute';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {setIsMounted(true);});
  
  return (
    <div>
      {isMounted && (
        <ProtectedRoute>
          <div>
            <div className='text-slate-900 text-base font-medium tracking-tight p-5'>
              <Navbar/>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
          </div>
        </ProtectedRoute>
      )}
    </div>
  )
}
