import { useEffect, useState } from 'react';
import { Button, Grid, LinearProgress } from '@mui/material/';
import NewsItemComponent from './NewsItemComponent';
import api from '../Api/articles';

const DisplayResults = ({ keyWord, updatemyFavourites }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [newsItems, setNewsItems] = useState([]);

  // const newsApiUrl = `https://newsapi.org/v2/everything?apiKey=${apiKey}&sortBy=publishedAt&searchIn=title&pageSize=${pageSize}&page=${pageNo}&language=en`
  // const newsApiUrlWithKeyWord = `https://newsapi.org/v2/everything?apiKey=${apiKey}&sortBy=publishedAt&q=${keyWord}&searchIn=title&pageSize=${pageSize}&page=${pageNo}&language=en`

  //Retrieve News
  const retrieveNews = async () => {
    try {
      const res = await api.get("/articles");
      if(res.data) {
        setNewsItems(res.data);
      }
    } catch(e) {
      console.log("error")
    }
  }

  //Retrieve News (from News Api)
  // const retrieveNews = async() => {
  //   try {

  //     if(keyWord==='') {
  //       const news = await axios.get(newsApiUrl);
  //       setNewsItems(news.data.articles);
  //     } else {
  //       const news = await axios.get(newsApiUrlWithKeyWord);
  //       setNewsItems(news.data.articles);
  //     }
  //   } catch(e) {
  //     console.log(e.message);
  //   }
  // }

  useEffect(() => {
    retrieveNews();
  }, [keyWord]);

  
    return (
      <Grid container spacing={1} className='news-grid'>
        {newsItems.map((newsItem, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <NewsItemComponent newsItem={newsItem} key={index} updatemyFavourites={updatemyFavourites} />
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