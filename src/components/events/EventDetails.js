import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import wishlisticon from './../../assets/wishlist.png';

const StyledCard = styled(Card)({
  backgroundColor: '#a5b8d5',
  color: 'black',
  border: '2px solid #d3d3d3',
  borderRadius: 12,
  overflow: 'hidden',
  marginBottom: '1em',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const EventDetails = React.memo(({ events, onWishlistButtonClick }) => {
  return (
    <StyledCard>
      <CardContent className="text-center">
        
        <Typography variant="h5">
          {events.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {events.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          DateTime UTC: {events.datetime_utc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Venue:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: {events.venue.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capacity: {events.venue.capacity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Country: {events.venue.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Performers:
        </Typography>
        {events.performers.map((performer, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {performer.name} - Score: {performer.score}
          </Typography>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="primary" onClick={() => onWishlistButtonClick(events.id)}>
          <FavoriteIcon />
        </IconButton>
        <IconButton color="primary">
          <img src={wishlisticon} alt="Wishlist" style={{ width: '30px', height: '30px' }} />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}
)

export default EventDetails;
