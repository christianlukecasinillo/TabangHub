'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function DonationPage() {
    const [donationType, setDonationType] = useState('single');
    const [customAmount, setCustomAmount] = useState('');
    const [open, setOpen] = useState(false);

    const handleDonationTypeChange = (event) => {
        setDonationType(event.target.value);
    };

    const handleCustomAmountChange = (event) => {
        setCustomAmount(event.target.value);
    };

    const handleDonateClick = () => {
        setOpen(true); // Open the modal when the "Donate Now" button is clicked
    };

    const handleClose = () => {
        setOpen(false); // Close the modal
    };

    return (
        <>
            <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', p: 4 }}>
                {/* Donation Type Selection */}
                <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{ mb: 2, fontSize: '1.2rem' }}>I want to make a:</FormLabel>
                    <RadioGroup
                        row
                        aria-label="donation-type"
                        name="donation-type"
                        value={donationType}
                        onChange={handleDonationTypeChange}
                    >
                        <FormControlLabel value="single" control={<Radio />} label="Single donation" />
                        <FormControlLabel value="monthly" control={<Radio />} label="Monthly donation" />
                    </RadioGroup>
                </FormControl>

                {/* Donation Options */}
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    {/* Option 1 */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="100"
                                image="/images/donation.png"
                                alt="Donation"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#00b248' }}>
                                    P60
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Can help provide food for the volunteers
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Option 2 */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/donation.png"
                                alt="Donation"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#00b248' }}>
                                    P100
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Can help provide transportation allowance and food for the volunteers
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Option 3 */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/donation.png"
                                alt="Donation"
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#00b248' }}>
                                    P250
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Can help provide expenses for the organization
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Custom Donation Amount */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body1">Or donate another amount:</Typography>
                    <TextField
                        label="Other"
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        sx={{ width: '150px', mx: 2 }}
                        InputProps={{
                            startAdornment: (
                                <Typography variant="body1" sx={{ pr: 1 }}>P</Typography>
                            )
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#00b248',
                            color: 'white',
                            fontWeight: 'bold',
                            '&:hover': { backgroundColor: '#00a43a' },
                            ml: 2,
                        }}
                        onClick={handleDonateClick}
                    >
                        Donate Now
                    </Button>
                </Box>
            </Box>

            {/* Modal for Successful Donation */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Donation Success</DialogTitle>
                <DialogContent>
                    <Typography>Successfully Donated! Thank you for your contribution.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
