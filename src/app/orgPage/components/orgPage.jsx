import React from 'react';
import { Box, Grid, Typography, Button, TextField, Card, CardMedia, Divider, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

export default function EventDetails() {
  return (
    <Box className='mt-16' sx={{ padding: 4 }}>
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Community Coastal Clean-Up Day
      </Typography>
      <Typography variant="body1" gutterBottom>
        Join us for a Community Coastal Clean-Up Day to help keep our local parks and streets clean and beautiful! Volunteers will be provided with gloves, trash bags, and other necessary supplies. This is a great opportunity to meet new people, contribute to the community, and enjoy some fresh air. Families and groups are welcome.
      </Typography>

      <Grid container spacing={2} mt={2}>

        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image="/images/clean-up.jpg" // Replace with your image path
              alt="Community Clean-Up"
            />
          </Card>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">
              <LocationOnIcon fontSize="small" /> Maribago Beach
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              <CalendarTodayIcon fontSize="small" /> 11/30/2024
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              <WatchLaterIcon fontSize="small" /> 10:00 AM - 3:00 PM
            </Typography>

            {/* Skills Required Section */}
            <Typography variant="body1" fontWeight="bold" mt={3}>
              Skills Required
            </Typography>
            <Typography variant="body2">Cleaning, Organizing, Teamwork</Typography>

            {/* Volunteer Count */}
            <Typography variant="body1" fontWeight="bold" mt={3}>
              Volunteer Counter
            </Typography>
            <Typography>
                Volunteers: 20
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Apply
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* About Us and Contact Section */}
      <Grid container spacing={2}>
        {/* About Us */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            About us
          </Typography>
          <Typography variant="body2">
            Lapu-Lapu City Coastal Clean-Up Crew is a dedicated group of volunteers committed to maintaining and enhancing the beauty of Lapu-Lapu City's parks and streets. Our mission is to foster a sense of community pride and environmental responsibility through regular clean-up events and sustainability initiatives. We believe that a cleaner environment leads to healthier, happier communities, and we are proud to offer an outlet for individuals seeking an impactful way to give back.
          </Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact us
          </Typography>
          <Typography variant="body2">Phone: 09165679714</Typography>
          <Typography variant="body2">Email: cleanup_event@gmail.com</Typography>
          <Box display="flex" mt={1}>
            <IconButton href="https://www.facebook.com/example" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/example" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.gmail.com/example" target="_blank">
              <GoogleIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
