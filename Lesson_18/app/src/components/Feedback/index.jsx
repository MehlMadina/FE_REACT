import React from 'react';
import { Box, Button, Container, Stack, TextField } from "@mui/material";

export default function Feedback() {
  return (
    <Container sx={{ p: 4 }} maxWidth="md">
      <Box component="form">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Lastname" variant="outlined" />
            <TextField type="email" label="Email" variant="outlined" />
          </Stack>
          <Stack direction="column" spacing={2}>
            <TextField placeholder="Your message" multiline rows={4} />
            <Button sx={{ my: 2 }} variant="contained">
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
