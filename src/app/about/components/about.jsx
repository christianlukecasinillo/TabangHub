import React from 'react';
import { Container, Box, Typography, Avatar, Grid } from '@mui/material';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Balagbis, Raell Geramie',
      title: 'Hipster',
      image: '/images/raell.png', 
    },
    {
      name: 'Canales, Slash',
      title: 'Hustler',
      image: '/images/slash.jpg', 
    },
    {
        name: 'Casinillo, Christian Luke',
        title: 'Tester',
        image: '/images/luke.jpg', 
      },
      {
        name: 'Dosado, Alan Gabriel',
        title: 'Hacker',
        image: '/images/alan.jpg', 
      },
      {
        name: 'Ore, Arvie',
        title: 'Hacker',
        image: '/images/arvie.jpg', 
      }
  ];

  return (
    <Container className='mt-20'>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          A job is worth doing together
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', mb: 6 }}>
          Meet the dedicated team at <strong>TabangHub</strong>, revolutionizing the way we connect and support communities with innovative, beautiful, and sustainable solutions.
        </Typography>
      </Box>

      {/* Meet the Team */}
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
            <Avatar
              alt={member.name}
              src={member.image}
              sx={{
                width: 150,
                height: 150,
                mx: 'auto',
                mb: 2,
                border: '4px solid #f5f5f5',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {member.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {member.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
