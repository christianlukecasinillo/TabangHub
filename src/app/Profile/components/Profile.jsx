import React from 'react';
import { Box, Typography, Avatar, Button, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EventIcon from '@mui/icons-material/Event';
import Link from 'next/link';

export default function Profile() {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: '500px',
          textAlign: 'center',
        }}
      >
        {/* Profile Picture */}
        <Avatar
          alt="User Profile"
          src="/images/profile.png" // Placeholder image
          sx={{ width: 120, height: 120, margin: '0 auto 20px auto' }}
        />

        {/* User Info */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Christian Luke Casinillo
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Photographer | Videographer
        </Typography>

        {/* Divider */}
        <Divider sx={{ marginY: 3 }} />

        {/* Profile Details */}
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          <strong>Email:</strong> christianlukecasinillo2@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          <strong>Phone:</strong> +63 916 567 9714
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          <strong>Location:</strong> Cebu, Philippines
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          <strong>Availability:</strong> Full-Time
        </Typography>

        {/* Action Buttons */}
        <Box display="flex" justifyContent="space-around" mt={3}>
          <Button
            component={Link}
            href = "/editprofile"
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
              color: '#1976d2',
              borderColor: '#1976d2',
              '&:hover': {
                borderColor: '#1565c0',
                backgroundColor: '#e3f2fd',
              },
            }}
          >
            Edit Profile
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/eventHistory"
            startIcon={<EventIcon />}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Event History
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
