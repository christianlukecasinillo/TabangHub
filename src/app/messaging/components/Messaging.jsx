import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  TextField,
  IconButton,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InfoIcon from "@mui/icons-material/Info";

export default function GroupChatPage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
        backgroundColor: "#f0f4f8",
        mt: 8
      }}
    >
      {/* Left Sidebar */}
      <Box
        sx={{
          width: 280,
          backgroundColor: "#e8f0fe",
          padding: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Group Chat
        </Typography>
        <List>
          <ListItem
            sx={{
              backgroundColor: "#cfe8fc",
              borderRadius: 2,
            }}
          >
            <ListItemAvatar>
              <Avatar src="/images/brush.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Brush & Canvas"
            />
          </ListItem>
        </List>
      </Box>

      {/* Main Chat Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          margin: 2,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        {/* Chat Header */}
        <Box
          sx={{
            padding: 2,
            backgroundColor: "#e3f2fd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Brush & Canvas
          </Typography>
          <InfoIcon color="action" />
        </Box>

        <Divider />

        {/* Chat Messages */}
        <Box
          sx={{
            flex: 1,
            padding: 2,
            overflowY: "auto",
            backgroundColor: "#f8fbff",
          }}
        >
          {/* Placeholder for Chat Messages */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ textAlign: "center", marginTop: 4 }}
          >
            No messages yet. Start the conversation!
          </Typography>
        </Box>

        <Divider />

        {/* Message Input */}
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "2px 10px",
            borderRadius: "0 0 8px 8px",
            boxShadow: "none",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            size="small"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <IconButton color="primary" sx={{ marginLeft: 1 }}>
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
}
