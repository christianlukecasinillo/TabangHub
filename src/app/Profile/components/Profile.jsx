import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  Chip,
  Stack,
  Rating,
  Divider,
  MenuItem,
  Select,
  Link
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile() {
  const skills = [
    
    "Photographer",
    "Videographer",
  ];

  const ratings = [
    { skill: "Photograpger", value: 5.0 },
    { skill: "Videographer", value: 3.5 },
  ];

  const eventHistory = [
    {
      title: "GMA 7",
      description: "Photographing skills is needed in this event",
      startDate: "November 22, 2024",
      endDate: "November 22, 2024",
      skill: "Photographer",
      rating: 5,
    },
    {
      title: "UAAP",
      description: "Videographer skills is needed in this event",
      startDate: "November 25, 2024",
      endDate: "November 25, 2024",
      skill: "Videographer",
      rating: 3.5,
    },
  ];

  const volunteerSummary = {
    rate: 4,
    eventsParticipated: 8,
    skillsCount: 2,
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Profile Header */}
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 3,
          boxShadow: 1,
          marginBottom: 3,
        }}
      >
        <Box display="flex" alignItems="center" mt={6}>
          <Avatar
            alt="User Profile"
            src="/images/profile.png"
            sx={{ width: 100, height: 100, marginRight: 3 }}
          />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Casinillo, Christian Luke
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Email:</strong> christianlukecasinillo2@gmail.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Address:</strong> Gun-ob, Lapu-Lapu City, Cebu
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Contact Number:</strong> 09165679714
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Availability:</strong> Full-Time
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          component={Link}
          href="/editprofile"
          startIcon={<EditIcon />}
          sx={{
            color: "#1976d2",
            borderColor: "#1976d2",
            "&:hover": {
              borderColor: "#1565c0",
              backgroundColor: "#e3f2fd",
            },
          }}
        >
          Edit
        </Button>
      </Card>

      {/* About Me and Skills */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3}>
        {/* About Me */}
        <Card sx={{ flex: 1, padding: 3, boxShadow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1976d2", marginBottom: 1 }}
          >
            About me
          </Typography>
          <Typography variant="body2" color="textSecondary">
          I am a dedicated volunteer with a passion for making a positive impact in the community.
          </Typography>
        </Card>

        {/* Skills */}
        <Card sx={{ flex: 2, padding: 3, boxShadow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1976d2", marginBottom: 1 }}
          >
            Skills
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="success"
                variant="outlined"
              />
            ))}
          </Stack>
          
        </Card>
      </Box>

      {/* Volunteer Summary and Ratings */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3}>
        {/* Volunteer Summary */}
        <Card sx={{ flex: 1, padding: 3, boxShadow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#1976d2", marginBottom: 1 }}
          >
            Volunteer Summary
          </Typography>
          <Stack spacing={1}>
            <Box display="flex" alignItems="center">
              <Typography>My Rate: </Typography>
              <Rating
                value={volunteerSummary.rate}
                precision={0.1}
                readOnly
                sx={{ ml: 1 }}
              />
            </Box>
            <Typography>
              Number of event(s) participated:{" "}
              <strong>{volunteerSummary.eventsParticipated}</strong>
            </Typography>
            <Typography>
              Number of skill(s): <strong>{volunteerSummary.skillsCount}</strong>
            </Typography>
          </Stack>
        </Card>

        {/* Ratings */}
        <Card sx={{ flex: 1, padding: 3, boxShadow: 1 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={2}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1976d2" }}
            >
              Ratings
            </Typography>
            <Select defaultValue="Highest" size="small" sx={{ minWidth: 120 }}>
              <MenuItem value="Highest">Highest</MenuItem>
              <MenuItem value="Lowest">Lowest</MenuItem>
            </Select>
          </Box>
          <Stack spacing={1}>
            {ratings.map((rating) => (
              <Box
                key={rating.skill}
                display="flex"
                justifyContent="space-between"
              >
                <Typography>{rating.skill}</Typography>
                <Rating value={rating.value} precision={0.1} readOnly />
              </Box>
            ))}
          </Stack>
        </Card>
      </Box>

      {/* Event History */}
      <Card sx={{ padding: 3, boxShadow: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#1976d2", marginBottom: 2 }}
        >
          Event History
        </Typography>
        <Stack spacing={2}>
          {eventHistory.map((event, index) => (
            <Box key={index} borderBottom="1px solid #ddd" pb={2}>
              <Typography variant="body1" fontWeight="bold">
                {event.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {event.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Start Date: {event.startDate} - End Date: {event.endDate}
              </Typography>
              <Chip
                label={event.skill}
                sx={{
                  mt: 1,
                  color: "white",
                  backgroundColor: "#43a047",
                  fontWeight: "bold",
                }}
              />
              <Box display="flex" alignItems="center" mt={1}>
                <Rating value={event.rating} precision={0.5} readOnly />
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="text"
          component={Link}
          href="/eventHistory"
          sx={{
            mt: 2,
            color: "#1976d2",
            textTransform: "none",
          }}
        >
          View More
        </Button>
      </Card>
    </Box>
  );
}
