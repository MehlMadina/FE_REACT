import { Box, Container, Stack, Typography, Button } from '@mui/material'
import React from 'react'

export default function Main() {
  return (
    <Box sx={{pt: 8, pb: 6}}>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center">
          Album Layout
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <Stack direction='row' justifyContent="center" spacing={1}>
          <Button variant='contained' sx={{
            color: "#ffffff"
          }}>Main call to action</Button>
          <Button variant='outlined'>Secondary action</Button>
        </Stack>
      </Container>
    </Box>
  );
}
