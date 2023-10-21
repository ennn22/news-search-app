import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material/';
import { pink, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NewsItem = ({ newsItem, updateMyFavourites, isFavourite }) => {
  const source = newsItem.source;
  const date = Date(newsItem.publishedAt).toString().split(" ");

  const handleFavourites = () => {
    if (!isFavourite) {
      updateMyFavourites(newsItem);
    }
  };

  return (
    <Grid sx={{ height: "100%" }}>
      <Card sx={{ height: "100%", maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "orange" }} aria-label="avatar">
              {source.name[0]}
            </Avatar>
          }
          title={source.name}
          subheader={date.slice(1, 4).join(' ')}
        />
        <CardMedia
          component="img"
          height="194"
          image={newsItem.urlToImage}
          alt={newsItem.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {newsItem.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton 
            sx={{ color: isFavourite ? pink[500] : grey[400] }}
            aria-label="add to favorites" 
            onClick={handleFavourites}
          >
            <FavoriteIcon />
          </IconButton>
      </CardActions>
      </Card>
    </Grid>
  );
}


export default NewsItem;