import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({data}) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} onClick={()=>navigate('/home', {
      state: {
        data
      }
    })} >
      <CardMedia
        component="img"
        height="140"
        image={data?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title.slice(0,20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description.slice(0,60)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Price: {data.price}$</Button>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
