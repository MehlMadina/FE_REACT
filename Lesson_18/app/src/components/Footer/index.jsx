import React from 'react'
import { Box, Typography, Link } from '@mui/material';


export default function Footer() {
  return (
    <Box component={"footer"}>
      <Typography variant="h6" align="center" sx={{color: "grey"}}>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" component="p"  sx={{color: "grey"}}>
        Something here to give the footer a purpose!
        </Typography>
        <Typography variant="body2" align="center" sx={{color: "grey"}}>
        Copyright ©️ <Link href="#">Your Website</Link>{" "} 2023.
        </Typography>
    </Box>
  )
}
