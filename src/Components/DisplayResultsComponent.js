import { useEffect, useState } from 'react';
import { Grid, LinearProgress } from '@mui/material/';
import NewsItemComponent from './NewsItemComponent';
import axios from 'axios';
import OrangeButton from './OrangeButton';

const apiKey = process.env.REACT_APP_API_KEY;

const DisplayResults = ({ keyWord, addMyFavourites, removeMyFavourites, myFavourites }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const pageSize = 10;

  const newsApiUrl = 
    `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}&pageSize=${pageSize}&page=${pageNo}`
  const newsApiUrlWithKeyWord = 
    `https://newsapi.org/v2/everything?apiKey=${apiKey}&sortBy=publishedAt&q=${keyWord}&searchIn=title&pageSize=${pageSize}&page=${pageNo}`

  // Retrieve News (from News Api)
  const retrieveNews = async () => {
    try {
      let news;
      if (keyWord==='') {
        news = await axios.get(newsApiUrl);
      } else {
        news = await axios.get(newsApiUrlWithKeyWord);
      }
      setNewsItems([...newsItems, ...news.data.articles]);
    } catch (e) {
      console.log("error");
    } finally {
      setPageNo(pageNo + 1);
    }
  }
  
  useEffect(() => {
    retrieveNews();
  }, [keyWord]);

  const handleLoadMore = async () => {
    try {
      setIsLoading(true);
      retrieveNews();
    } catch (e) {
      console.log("error", e);
    } finally {
      setIsLoading(false);
    }
  }

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
        <OrangeButton variant="contained" disabled={isLoading} onClick={handleLoadMore}>
          {isLoading ? 'isLoading...' : 'Load More'}
        </OrangeButton>
      </Grid>
      {isLoading && (
        <Grid item xs={12}>
          <LinearProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default DisplayResults;