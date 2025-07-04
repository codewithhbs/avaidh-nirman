'use client'
import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const BlogAdminLogin: NextPage = () => {

  const [formData, setFormData] = useState({
    email:'',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
     const { name, value } = e.target;
     setFormData(prev =>({
       ...prev, [name]:value
     }));
  };

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();

    console.log('login attempt', formData);
  }

  return (
    <>
      <Head>
        <title>Blog Admin - Login</title>
        <meta name="description" content="Blog Admin Dashboard Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-br from-sky-100 via-blue-50 to-blue-100 flex items-center justify-center py-10">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Blog Admin
              </h1>
              <p className="text-gray-600 text-sm">
                Enter your credentials to access the dashboard
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
              >
                Sign in
              </button>
            </form>

            {/* Additional Options */}
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
              >
                Forgot your password?
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default BlogAdminLogin;