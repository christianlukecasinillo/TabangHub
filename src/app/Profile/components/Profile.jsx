import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
  Card,
  Chip,
  Stack,
  Link,
  Rating,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile() {
  const skills = ["Photographer", "Videographer"];
  const ratings = [
    { skill: "Photographer", value: 4.5 },
    { skill: "Videographer", value: 4.0 },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          maxWidth: 1000,
          padding: 4,
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
          <Box display="flex" alignItems="center">
            <Avatar
              alt="User Profile"
              src="/images/profile.png"
              sx={{ width: 100, height: 100, marginRight: 3 }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Christian Luke Casinillo
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Email:</strong> christianlukecasinillo2@gmail.com
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Location:</strong> Cebu, Philippines
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

        {/* About Me, Skills, and Ratings */}
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
              I am a dedicated volunteer with a passion for making a positive
              impact in the community.
            </Typography>
          </Card>

          {/* Skills */}
          <Card sx={{ flex: 1, padding: 3, boxShadow: 1 }}>
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
                  variant="contained"
                />
              ))}
            </Stack>
          </Card>

          {/* Ratings */}
          <Card sx={{ flex: 1, padding: 3, boxShadow: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1976d2", marginBottom: 1 }}
            >
              Ratings
            </Typography>
            <Stack spacing={1}>
              {ratings.map((rating) => (
                <Box
                  key={rating.skill}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>{rating.skill}</Typography>
                  <Rating value={rating.value} precision={0.5} readOnly />
                </Box>
              ))}
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
