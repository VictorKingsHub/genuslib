// app/login/page.tsx
'use client'; // This makes it a Client Component as it will have interactive elements

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Basic validation (you'd replace this with actual authentication logic)
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Simulate API call for login
    try {
      // In a real application, you'd send credentials to your backend API
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      //   console.log('Login successful:', data);
      //   // Redirect to dashboard or home page
      //   // router.push('/dashboard');
      // } else {
      //   setError(data.message || 'Login failed. Please check your credentials.');
      // }
      
      console.log('Attempting login with:', { username, password });
      // For demonstration, assume successful login
      alert('Login successful! (This is a demo)');
      // You would typically redirect here
      // window.location.href = '/dashboard'; 

    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          {/* Replace with your actual logo/image. 
              Make sure to put your image file in the 'public' directory, e.g., /public/your-logo.png
              Adjust width and height as needed based on your logo's dimensions.
          */}
          <Image 
            src="/user-icon.png" // Placeholder image. Change this!
            alt="User Icon" 
            width={80} 
            height={80} 
            className="rounded-full"
          />
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              User
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don&apos;t have an account yet?{' '}
          <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}