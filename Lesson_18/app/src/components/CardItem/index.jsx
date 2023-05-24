import React from 'react';
import { Typography, CardMedia, CardContent, Card, Button, CardActions } from '@mui/material';

export default function CardItem() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        image="https://source.unsplash.com/random?wallpapers"
      />
      <CardContent>
        <Typography variant="h5" paragraph>
          Heading
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button>view</Button>
        <Button>Edit</Button>
      </CardActions>
    </Card>
  );
}
