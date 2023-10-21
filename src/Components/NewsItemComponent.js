import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material/';
import { pink, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import dayjs from 'dayjs';

const NewsItem = ({ newsItem, addMyFavourites, removeMyFavourites, isFavourite }) => {
  const source = newsItem.source;
  const date = dayjs(newsItem.publishedAt).format('YYYY-MM-DD');
  
  const handleFavourites = () => {
    if (!isFavourite) {
      addMyFavourites(newsItem);
    } else {
      removeMyFavourites(newsItem);
    }
  };

  return (
    <Grid sx={{ height: "100%" }}>
      <Card sx={{ height: "100%" }}>
        <a href={newsItem.url} target="_blank">
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "orange" }} aria-label="avatar">
                  {source.name[0]}
                </Avatar>
              }
              title={source.name}
              subheader={date}
            />
            <CardMedia
              component="img"
              height="194"
              image={newsItem.urlToImage}
              alt={newsItem.title}
            />
            <CardContent>
              <Typography className="text-ellipsis" variant="body2" color="text.secondary">
                {newsItem.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
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