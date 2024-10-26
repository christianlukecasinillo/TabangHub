'use client'
import React from 'react';
import { Avatar, Button, Box, TextField, Typography, Container, Grid, Paper, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Link from 'next/link';

export default function Profile() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 0 }}>
      {/* Profile Header Section */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: '16px' }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
          {/* Avatar */}
          <Avatar 
            alt="Profile Picture" 
            src="/images/profile.png" 
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          
          {/* User Name and Role */}
          <Typography variant="h5" fontWeight="bold">
            Christian Luke Casinillo
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Volunteer
          </Typography>
        </Box>

        {/* Profile Details Form */}
        <Grid container spacing={3}>
          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              fullWidth
              autoComplete="email"
              variant="outlined"
              defaultValue="christianlukecasinillo2@email.com"
            />
          </Grid>

          {/* Contact Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="contact"
              name="contact"
              label="Contact Number"
              fullWidth
              autoComplete="contact"
              variant="outlined"
              defaultValue="+63 916 567 9714"
            />
          </Grid>

          {/* Bio Section */}
          <Grid item xs={12}>
            <TextField
              id="bio"
              name="bio"
              label="Bio"
              fullWidth
              multiline
              rows={4}
              defaultValue="I am a dedicated volunteer with a passion for making a positive impact in the community."
              variant="outlined"
            />
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12}>
            <TextField
              id="skills"
              name="skills"
              label="Skills"
              fullWidth
              defaultValue="Photographer, Videographer"
              variant="outlined"
            />
          </Grid>

          {/* Select Age Field */}
          <Grid item xs={12}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Availability</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Availability"
                  onChange={handleChange}
                >
                  <MenuItem>Full-Time</MenuItem>
                  <MenuItem>Part-Time</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button variant="contained" color="primary" sx={{ width: '45%' }}>
            Save Changes
          </Button>
          <Button 
            component={Link}
            href="/Profile"
            variant="outlined" 
            color="error" 
            sx={{ width: '45%' }} 
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
