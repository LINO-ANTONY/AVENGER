import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Switch,
  FormControlLabel,
  Button,
  Typography,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [reportProblemDialogOpen, setReportProblemDialogOpen] = useState(false);
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);

  const handleReportProblemClick = () => {
    setReportProblemDialogOpen(true);
  };

  const handleHelpClick = () => {
    setHelpDialogOpen(true);
  };

  const handleTermsClick = () => {
    setTermsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setReportProblemDialogOpen(false);
    setHelpDialogOpen(false);
    setTermsDialogOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container maxWidth="sm">
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Typography variant="h4">Settings</Typography>
          </Grid>

          <Grid item>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
              label="Dark Mode"
            />
          </Grid>

          <Grid item>
            <Button variant="outlined" onClick={handleReportProblemClick}>
              Report a Problem
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" onClick={handleHelpClick}>
              Help
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" onClick={handleTermsClick}>
              Terms and Conditions
            </Button>
          </Grid>
        </Grid>

        <Dialog open={reportProblemDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Report a Problem</DialogTitle>
          <DialogContent>
            {/* Your report problem form here */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={handleDialogClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={helpDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Help</DialogTitle>
          <DialogContent>
            {/* Your help content here */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
          </DialogActions>
        </Dialog>

        <Dialog open={termsDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogContent>
            {/* Your terms and conditions content here */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default SettingsPage;
