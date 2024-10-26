import Link from 'next/link';
import Box from '@mui/material/Box';
import { InputLabel, Input, FormControl } from '@mui/material';

export default function Register() {
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
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '8px', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px', 
          width: '100%',
        }}
      >
        
        <Box textAlign="center" mb={4}>
          <h1 className="text-4xl font-bold text-gray-600">Create a new account</h1>
          <p className="mt-2 text-xl text-gray-500">Fill the details to create organization.</p>
        </Box>

        <Box component="form" className="space-y-6" action="#" method="POST">
          <Box mb={3}>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-600">
              Email address
            </label>
            <Box mt={2}>
              <input
                placeholder="Email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-gray-50 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                style={{ paddingLeft: '12px' }}
              />
            </Box>
          </Box>

          <Box mb={3}>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-600">
              Password
            </label>
            <Box mt={2}>
              <input
                placeholder="**********"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 bg-gray-50 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                style={{ paddingLeft: '12px' }}
              />
            </Box>
          </Box>

          <Box mb={3}>
            <label htmlFor="confpassword" className="block text-sm font-medium leading-6 text-gray-600">
              Confirm Password
            </label>
            <Box mt={2}>
              <input
                placeholder="**********"
                name="confpassword"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 bg-gray-50 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                style={{ paddingLeft: '12px' }}
              />
            </Box>
          </Box>
          {/* Valid id 1 */}
          <Box mb={3}>
          <FormControl fullWidth margin="normal">
                <InputLabel shrink htmlFor="valid-id-1">
                  Valid ID 1
                </InputLabel>
                <Input type="file" id="valid-id-1" />
            </FormControl>
          </Box>
          {/* Valid id 2 */}
          <Box mb={3}>
          <FormControl fullWidth margin="normal">
                <InputLabel shrink htmlFor="valid-id-2">
                  Valid ID 2
                </InputLabel>
                <Input type="file" id="valid-id-2" />
            </FormControl>
          </Box>

          <Box>
            <Link href="/Login">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Register
              </button>
            </Link>
          </Box>
          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?
            <Link href="/Login" className="font-semibold leading-6 text-blue-500 hover:text-blue-400">
              {' '}
              Login
            </Link>
          </p>
        </Box>
      </Box>
    </Box>
  );
}
