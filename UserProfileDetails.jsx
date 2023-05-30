import React, { useState, useEffect } from 'react';
import {
  Typography,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid
} from '@mui/material';



const UserProfileDetails = ({ userDetails, onUpdateDetails }) => {
  const [name, setName] = useState(userDetails.name);
  const [place, setPlace] = useState(userDetails.place);
  const [age, setAge] = useState(userDetails.age);
  const [email, setEmail] = useState(userDetails.email);
  const [education, setEducation] = useState(userDetails.education);
  const [phoneNumber, setPhoneNumber] = useState(userDetails.contactDetails.phoneNumber);
  const [emailId, setEmailId] = useState(userDetails.contactDetails.emailId);
  const [termsAndConditions, setTermsAndConditions] = useState(userDetails.termsAndConditions);

  const handleUpdate = () => {
    const updatedDetails = {
      name,
      place,
      age,
      email,
      contactDetails: {
        phoneNumber,
        emailId,
      },
      termsAndConditions,
    };
    onUpdateDetails(updatedDetails);
  };

  return (
    <div>
      <TextField
        label="NAME"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="PLACE"
        fullWidth
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="AGE"
        fullWidth
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="EMAIL"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      
      <TextField
        label="PHONE NUMBER"
        fullWidth
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="CONTACT DETAILS"
        fullWidth
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="termsAndConditions">
          Terms and Conditions:
          <input
            id="termsAndConditions"
            type="checkbox"
            checked={termsAndConditions}
            onChange={(e) => setTermsAndConditions(e.target.checked)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
};

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState('path_to_profile_image.jpg');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    name: 'PAUL WALKER',
    place: ' Place',
    age: 42,
    email: 'john.doe@example.com',
    contactDetails: {
      phoneNumber: '9778263870',
    },
    termsAndConditions: false,
  });

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setProfilePic(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleUpdateProfileDetails = (updatedDetails) => {
    setLoginDetails(updatedDetails);
    handleCloseEditDialog();
  };

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <Avatar src={profilePic} alt="Profile Image" style={{ width: '140px', height: '140px', cursor: 'pointer' }} onClick={() => document.getElementById('profilePicInput').click()} />
        <input type="file" id="profilePicInput" accept="image/*" style={{ display: 'none' }} onChange={handleProfilePicChange} />
      </div>

      <div
        style={{
          marginBottom: '32px',
          backgroundColor: '#ffffff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        }}
      >
      <div
        style={{
          marginBottom: '32px',
          backgroundColor: '#ffffff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {loginDetails.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {loginDetails.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
              Place: {loginDetails.place}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
              Age: {loginDetails.age}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
              Phone Number: {loginDetails.contactDetails.phoneNumber}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
               contact Details:{loginDetails.contactDetails.contactDetails}
            </Typography>
          </Grid>
        </Grid>
      </div>
        
      </div>

      <Button variant="outlined" color="primary" onClick={handleOpenEditDialog} style={{ marginTop: '16px' }}>
          EDIT PROFILE
        </Button>

      <Button variant="contained" color="primary" style={{ marginTop: '32px' }}>
        Logout
      </Button>

      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Profile Details</DialogTitle>
        <DialogContent>
          <UserProfileDetails userDetails={loginDetails} onUpdateDetails={handleUpdateProfileDetails} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserProfile;