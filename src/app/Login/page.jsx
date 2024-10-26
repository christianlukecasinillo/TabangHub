import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: '#e0e0e0',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white', // White background for the box
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: '400px', 
        }}
      >
        {/* Image and Title Section */}
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={2}>
          <Image 
            src="/images/logoTabangHub.png" 
            width={80} 
            height={80} 
            alt="Logo"
          />
          <h1 className="text-center text-2xl font-bold font-serif leading-9 tracking-tight text-gray-500 mt-4">
            Login
          </h1>
        </Box>
        
        <Box>
          <form className="space-y-6">
            <Box>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700 font-serif">
                Email address
              </label>
              <Box mt={1}>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  style={{ paddingLeft: '12px' }}
                />
              </Box>
            </Box>

            <Box>
              <Box>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700 font-serif">
                  Password
                </label>
              </Box>
              <Box mt={1}>
                <input
                  placeholder="************"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-white py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  style={{ paddingLeft: '12px' }}
                />
              </Box>
            </Box>

            <Box>
              <Link href="/dashboard">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Login
                </button>
              </Link>
            </Box>

            <Box className="text-sm mt-0.5">
              <Link href="/Forgot" className="font-semibold text-blue-500 hover:text-blue-400">
                Forgot password?
              </Link>
            </Box>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            Don’t have an account?
            <Link href="/chooseregister" className="font-semibold leading-6 text-blue-500 hover:text-blue-400">
              {' '}
              SignUp Here
            </Link>
          </p>
        </Box>
      </Box>
    </Box>
  );
}
