import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from 'services/authService';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/auth/login');
    }
  }, []);

  if (isAuthenticated()) {
    return children;
  } else {
    return null;
  }
};

export default ProtectedRoute;
