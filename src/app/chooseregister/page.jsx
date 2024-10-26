import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function RegisterOptions() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', paddingTop: '1rem', backgroundColor: '#e0e0e0'}}>
      {/* Navbar Login and Register button */}
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 20,
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 20,
        }}
      >
        <Link href="/Login"  passHref >
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Back to Login
          </Button>
        </Link>
      </Box>

      {/* Register Option */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <Grid container spacing={4} justifyContent="center">

          {/* Register as Volunteer */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea
                component={Link}
                href="/Register"
                sx={{
                  position: 'relative',
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/volunteer_resized.png"
                  alt="Register as Volunteer"
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <Typography variant="h6" color="white">
                    Register as Volunteer
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Register as Organization */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea
                component={Link}
                href="/orgRegister"
                sx={{
                  position: 'relative',
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/Orga.png"
                  alt="Register as Organization"
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <Typography variant="h6" color="white">
                    Register as Organization
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
