import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Cards() {
  return (
    <Box sx={{ mt: 8, backgroundColor: '#e0e0e0' }}> {/* Main Container */}
      <Typography variant="h4" component="h2" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
        Dashboard
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center m-3">

        {/* Card 1*/}
        <Card 
          sx={{ maxWidth: 345, maxHeight: 550, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
          className="shadow-lg rounded-lg"
        >
          <CardMedia
            component="img"
            height="140"
            image="./images/pg.jpg"
            alt="Photographer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ABS-CBN
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ABS-CBN is seeking a volunteer who has at least 1 year experience in photography. This opportunity may involve capturing images for various events, programs, or initiatives led by ABS-CBN, potentially contributing to their projects related to media, community engagement, or corporate social responsibility.
            </Typography>
            <Button
              component={Link}
              href="/orgAbsCbn"
              variant="contained"
              sx={{ backgroundColor: '#03b1fc', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Event
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Button>
            <br />
            <Button
              component={Link}
              href="/donation"
              variant="contained"
              sx={{ backgroundColor: '#03b1fc', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              Donate
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card 
          sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
          className="shadow-lg rounded-lg"
        >
          <CardMedia
            component="img"
            height="140"
            image="./images/rcph.jpg"
            alt="Red-Cross"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Philippine Red-Cross
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Philippine Red Cross is seeking volunteers who possess knowledge in basic medical care. This opportunity likely involves providing first aid, assisting in medical missions, responding to emergencies, or supporting health and wellness initiatives in communities. Volunteers may be called upon to help in times of disaster, community outreach programs, blood donation drives, and other humanitarian activities organized by the Red Cross.
            </Typography>
            <Button
              component={Link}
              href="/orgRedcross"
              variant="contained"
              sx={{ backgroundColor: '#03b1fc', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Event
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Button>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card 
          sx={{ maxWidth: 345, maxHeight: '550px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
          className="shadow-lg rounded-lg"
        >
          <CardMedia
            component="img"
            height="140"
            image="./images/clean-up.jpg"
            alt="Photographer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Community Coastal Clean-up
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lapu-Lapu City Coastal Clean-Up Crew is a dedicated group of volunteers committed to maintaining and enhancing the beauty of Lapu-Lapu City's parks and streets. Our mission is to foster a sense of community pride and environmental responsibility through regular clean-up events and sustainability initiatives. We believe that a cleaner environment leads to healthier, happier communities, and we are proud to offer an outlet for individuals seeking an impactful way to give back.
            </Typography>
            <Button
              component={Link}
              href="/orgPage"
              variant="contained"
              sx={{ backgroundColor: '#03b1fc', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
            View Event
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Button>
          </CardContent>
        </Card>

      </div>
    </Box>
  );
}
