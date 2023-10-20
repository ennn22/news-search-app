import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NewsItem = ({ newsItem, updateMyFavourites }) => {
  console.log(newsItem);
  const websiteUrl = newsItem.url;
  const websiteName = websiteUrl.split('https://').pop().split('/')[0];

  const date = Date(newsItem.publishedAt).toString().split(" ");
  console.log(date);
  console.log(typeof(date));

  return (
    <Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          title={websiteName}
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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onclick={updateMyFavourites}/>
          </IconButton>
      </CardActions>
      </Card>
    </Grid>
  );
}


export default NewsItem;