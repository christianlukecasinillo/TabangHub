import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Cards() {
  return (
    <Box sx={{ mt: 8, backgroundColor: '#e0e0e0' }}>
      
        <Typography variant="h4" component="h2" align="center" sx={{ mb: 2, fontWeight: 'bold' }}>
            Event History
        </Typography>

      <Box 
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
          justifyItems: 'center'
        }}
      >
        {/* Card 1 */}
        <Card 
          sx={{ maxWidth: 345, maxHeight: 500, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
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
              href="/eventDetails"
              variant="contained"
              sx={{ backgroundColor: '#03b1fc', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Details
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card 
          sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
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
              The Philippine Red Cross is seeking volunteers who possess knowledge in basic medical care. This opportunity likely involves providing first aid, assisting in medical missions, responding to emergencies, or supporting health and wellness initiatives in communities.
            </Typography>
            <Button
              component={Link}
              href="/eventDetails"
              variant="contained"
              sx={{ backgroundColor: '#03b1fc', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Details
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Button>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card 
          sx={{ maxWidth: 345, maxHeight: 500, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
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
              ABS-CBN is seeking a volunteer who has experience in photography. This opportunity may involve capturing images for various events, programs, or initiatives led by ABS-CBN, potentially contributing to their projects related to media, community engagement, or corporate social responsibility.
            </Typography>
            <Button
              component={Link}
              href="/eventDetails"
              variant="contained"
              sx={{ backgroundColor: '#03b1fc', mt: 2, '&:hover': { backgroundColor: '#33f2b7' } }}
            >
              View Details
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
