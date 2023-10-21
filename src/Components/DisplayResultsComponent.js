import { useEffect, useState } from 'react';
import { Button, Grid, LinearProgress } from '@mui/material/';
import NewsItemComponent from './NewsItemComponent';
import axios from 'axios';
import api from '../Api/articles';

const DisplayResults = ({ keyWord, addMyFavourites, removeMyFavourites, myFavourites }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);

  const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8136319e677b42e1aedf4b2ec8c47cbc`
  const newsApiUrlWithKeyWord = `https://newsapi.org/v2/everything?apiKey=8136319e677b42e1aedf4b2ec8c47cbc&sortBy=publishedAt&q=${keyWord}&searchIn=title`

  // Retrieve News (from News Api)
  const retrieveNews = async() => {
    try {

      if(keyWord==='') {
        const news = await axios.get(newsApiUrl);
        setNewsItems(news.data.articles);
      } else {
        const news = await axios.get(newsApiUrlWithKeyWord);
        setNewsItems(news.data.articles);
      }
    } catch(e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    retrieveNews();
  }, [keyWord]);

  const myFavouritesIds = myFavourites.map((i) => i.url);
  
  return (
    <Grid container rowSpacing={{ xs: 4, sm: 3, md: 3 }} columnSpacing={{ xs: 1, sm: 3, md: 4, lg: 3 }} className='news-grid'>
      {newsItems.map((newsItem, index) => (
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
          <NewsItemComponent 
            newsItem={newsItem} 
            addMyFavourites={addMyFavourites} 
            removeMyFavourites={removeMyFavourites}
            isFavourite={myFavouritesIds.includes(newsItem.url)} 
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          // onClick={handleLoadMore}
          // disabled={loading}
        >
          {/* {loading ? 'Loading...' : 'Load More'} */}
        </Button>
      </Grid>
      {/* {loading && (
        <Grid item xs={12}>
          <LinearProgress />
        </Grid>
      )} */}
    </Grid>
  );
};


export default DisplayResults;