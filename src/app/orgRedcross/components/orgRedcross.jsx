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
        Philippine Red Cross
      </Typography>
      <Typography variant="body1" gutterBottom>
      Join us for a Philippine Red Cross Coastal Clean-Up Day to help preserve our coastal areas and protect the environment! Volunteers will be provided with gloves, trash bags, first aid kits, and other necessary supplies. This is a great opportunity to meet fellow advocates, contribute to environmental conservation, and promote community health and safety. Families and groups are welcome to participate in this meaningful event, as we work together to make a lasting impact on our shores.

      </Typography>

      <Grid container spacing={2} mt={2}>

        <Grid item xs={4} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image="/images/rcph.jpg"
              alt="Red Cross"
            />
          </Card>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">
              <LocationOnIcon fontSize="small" /> Lapu-Lapu City Auditorium
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              <CalendarTodayIcon fontSize="small" /> 10/30/2024
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              <WatchLaterIcon fontSize="small" /> 8:00 AM - 4:00 PM
            </Typography>

            {/* Skills Required Section */}
            <Typography variant="body1" fontWeight="bold" mt={3}>
              Skills Required
            </Typography>
            <Typography variant="body2">First-aid</Typography>

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
          The Philippine Red Cross is seeking volunteers who possess knowledge in basic medical care. This opportunity likely involves providing first aid, assisting in medical missions, responding to emergencies, or supporting health and wellness initiatives in communities. Volunteers may be called upon to help in times of disaster, community outreach programs, blood donation drives, and other humanitarian activities organized by the Red Cross.
          </Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact us
          </Typography>
          <Typography variant="body2">Phone: 09165679714</Typography>
          <Typography variant="body2">Email: redcross_ph@gmail.com</Typography>
          <Box display="flex" mt={1}>
            <IconButton href="https://www.facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.gmail.com" target="_blank">
              <GoogleIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
