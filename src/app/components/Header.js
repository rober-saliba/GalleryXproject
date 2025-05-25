'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header({ user: initialUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(initialUser);
  const pathname = usePathname();
  const router = useRouter();

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would check session from API
        // For now, we'll check if there's a user in sessionStorage
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setIsLoggedIn(true);
          setIsAdmin(parsedUser.role === 'admin');
        }
      } catch (error) {
        console.error('Error checking auth', error);
      }
    };

    if (!user) {
      checkAuth();
    } else {
      setIsLoggedIn(true);
      setIsAdmin(user.role === 'admin');
    }
  }, [user]);

  const handleLogout = () => {
    // In a real app, you would call logout API
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUser(null);
    router.push('/');
  };

  return (
    <header className="bg-black text-white py-4 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold">
          GalleryX
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-white font-semibold' : 'text-white hover:text-white'} transition-colors`}
          >
            Home
          </Link>
          
          {isLoggedIn && (
            <Link 
              href="/explore" 
              className={`${pathname.startsWith('/explore') ? 'text-white ' : 'text-white hover:text-white'} transition-colors`}
            >
              Explore
            </Link>
          )}
          
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <Link 
                  href="/admin" 
                  className={`${pathname.startsWith('/admin') ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  Dashboard
                </Link>
              )}
              
              <button
                onClick={handleLogout}
                className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              href="/login" 
              className="bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-white transition-colors"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}