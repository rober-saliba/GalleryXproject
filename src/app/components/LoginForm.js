'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState('visitor');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Check if user was just registered
  useEffect(() => {
    const isRegistered = searchParams.get('registered');
    if (isRegistered === 'true') {
      setRegistered(true);
    }
    
    // Check for redirect
    const redirect = searchParams.get('redirect');
    if (redirect) {
      // Store redirect URL for after login
      sessionStorage.setItem('loginRedirect', redirect);
    }
  }, [searchParams]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      console.log(`Attempting to log in as: ${username}`);
      
      // Send login request to the new API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok || !data.success) {
        console.error('Login failed:', data);
        throw new Error(data.error || 'Login failed');
      }
      
      console.log('Login successful:', data);
      
      // Store user in session storage
      sessionStorage.setItem('user', JSON.stringify(data.user));
      
      // Check for redirect URL
      const redirectUrl = sessionStorage.getItem('loginRedirect');
      sessionStorage.removeItem('loginRedirect');
      
      // Redirect based on user role and redirect URL
      if (data.user.role === 'admin') {
        router.push('/admin');
      } else if (redirectUrl) {
        router.push(redirectUrl);
      } else {
        // Go to home page after login for visitors
        router.push('/');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto text-black dark:bg-gray-100 rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-display font-bold">Login</h2>
      </div>
      
      {registered && (
        <div className="mb-6 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Registration successful! Please login with your credentials.
        </div>
      )}
      
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 font-medium text-center ${
            activeTab === 'visitor'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 text-gray-500 dark:bg-gray-500 dark:text-gray-300'
          }`}
          onClick={() => setActiveTab('visitor')}
        >
          Visitor
        </button>
        <button
          className={`flex-1 py-2 font-medium text-center ${
            activeTab === 'admin'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 text-gray-500 dark:bg-gray-500 dark:text-gray-300'
          }`}
          onClick={() => setActiveTab('admin')}
        >
          Admin
        </button>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 dark:text-black mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-500 dark:text-black mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full btn-primary py-2"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
          Create Account
        </Link>
      </div>
     
    </div>
  );
}