import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box'; // Importing Box from Material UI
import Image from 'next/image';

export default function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: '#e0e0e0', // Gray background for the entire page
        minHeight: '100vh', // Ensures the height covers the entire viewport
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
          boxShadow: 3, // Adds shadow to the box
          width: '100%',
          maxWidth: '400px', // Maximum width of the box
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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1d2129' }}>
            Find your account
          </h1>
          <p style={{ fontSize: '1rem', color: '#606770', marginTop: '10px' }}>
            Please enter your email address to search for your account.
          </p>
        </Box>
        
        <Box>
          <form className="space-y-6">
            <Box mt={2}>
              <input
                placeholder="Email Address"
                name="emailOrPhone"
                type="text"
                autoComplete="off"
                className="block w-full rounded-md border-1 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                style={{
                  paddingLeft: '12px',
                  borderColor: '#dddfe2',
                  borderWidth: '1px',
                  outline: 'none',
                }}
              />
            </Box>

            {/* Submit and Cancel buttons side-by-side */}
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Link href="/Login">
                <button
                  type="submit"
                  className="w-40 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600"
                >
                  Submit
                </button>
              </Link>
              <Link href="/Login">
                <button
                  type="button"
                  className="w-40 justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600"
                >
                  Cancel
                </button>
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
