import React from 'react';
import { Typography, Container, Paper, Grid, List, ListItem, ListItemText, Divider, TextField, Button } from '@mui/material';

const HelpPage = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>
          HELP - BOOK LIBRARY APP
        </Typography>
        <Typography variant="body1">
          Welcome to the Book Library app! Here are some frequently asked questions:
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                HOW CAN I RENT A BOOK?
              </Typography>
              <Typography variant="body1">
                To rent a book from our library, please follow these steps:
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemText primary="Find the book you want to rent." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Click on the book's details page." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Click on the Rent button." />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                HOW CAN I RETURN A BOOK?
              </Typography>
              <Typography variant="body1">
                To return a rented book, please follow these steps:
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemText primary="Go to your Account page." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Click on the Rented Books section." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Find the book you want to return." />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Click on the Return button." />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          HOW CAN I CONTACT?
        </Typography>
        <Typography variant="body1">
          If you need assistance or have any questions, you can contact us at <a href="mailto:Linoantont@gmail.com">Linoantont@gmail.com</a>.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          CUSTOMER REVIEWS
        </Typography>
        <Typography variant="body1">
          Read what our customers have to say about us:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* Add customer comment box */}
            <TextField
              id="comment"
              label="Leave a comment"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
            />
            <Button variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HelpPage;
