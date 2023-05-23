import React from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function Navbar() {
  return (
    <AppBar position='sticky'>
        <Toolbar>
           <PhotoCameraIcon sx={{mr: 2, color: "white"}}/>
           <Typography noWrap sx={{color: "white"}}>
                Album Layout
           </Typography>
        </Toolbar>
    </AppBar>
  )
}
