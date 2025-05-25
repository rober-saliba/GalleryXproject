'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [activeTab, setActiveTab] = useState('visitor');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const router = useRouter();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);
    
    try {
      console.log('Submitting registration form:', { ...formData, role: activeTab });
      
      // Send registration data to the new API endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role: activeTab
        }),
      });
      
      const data = await response.json();
      console.log('Registration response:', data);
      
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Registration failed');
      }
      
      // Show success message
      setSuccess(true);
      
      // Redirect to login page after a short delay
      setTimeout(() => {
        router.push('/login?registered=true');
      }, 2000);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto text-black dark:bg-gray-100 rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-display font-bold">Create Account</h2>
      </div>
      
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
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          <p>Registration successful! Redirecting to login...</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 dark:text-black mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="input-field"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-black mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 dark:text-black mb-2">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="input-field"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 dark:text-black mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full btn-primary py-2"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
}