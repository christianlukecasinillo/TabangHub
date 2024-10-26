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
        ABS-CBN
      </Typography>
      <Typography variant="body1" gutterBottom>
      Join us for the ABS-CBN Photography Day and help capture powerful moments during our latest environmental campaign! As a volunteer photographer, you’ll be provided access to exclusive event areas, with opportunities to photograph key moments and inspiring stories.
      </Typography>

      <Grid container spacing={2} mt={2}>

        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image="/images/pg.jpg"
              alt="Photography"
            />
          </Card>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">
              <LocationOnIcon fontSize="small" /> Hoopsdome
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              <CalendarTodayIcon fontSize="small" /> 12/12/2024
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
              <WatchLaterIcon fontSize="small" /> 9:00 AM - 5:00 PM
            </Typography>

            {/* Skills Required Section */}
            <Typography variant="body1" fontWeight="bold" mt={3}>
              Skills Required
            </Typography>
            <Typography variant="body2">Photographer, Videographer</Typography>

            {/* Volunteer Count */}
            <Typography variant="body1" fontWeight="bold" mt={3}>
              Volunteer Counter
            </Typography>
            <Typography>
                Volunteers: 10
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
          ABS-CBN is seeking a volunteer who has at least 1 year experience in photography. This opportunity may involve capturing images for various events, programs, or initiatives led by ABS-CBN, potentially contributing to their projects related to media, community engagement, or corporate social responsibility.
          </Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact us
          </Typography>
          <Typography variant="body2">Phone: 09165679714</Typography>
          <Typography variant="body2">Email: abs-cbn@gmail.com</Typography>
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
