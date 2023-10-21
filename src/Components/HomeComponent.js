import { useEffect, useState } from 'react';
import { Grid } from '@mui/material/';
import HeaderComponent from './HeaderComponent';
import MyFavouritesComponent from "./MyFavouritesComponent";
import DisplayResultsComponent from "./DisplayResultsComponent";

const Home = () => {
  const LOCAL_STORAGE_KEY = "myFavourites";
  const [keyWord, setKeyWord] = useState("");
  const localStorageFavourites = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [myFavourites, setMyFavourites] = useState(
    localStorageFavourites ? JSON.parse(localStorageFavourites) : []
  );
  
  //Pass KeyWord
  const handleSetKeyWord = (keyWord) => {
    setKeyWord(keyWord)
  };

  const updateMyFavourites = (newsItem) => {
    setMyFavourites([...myFavourites, newsItem]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myFavourites));
  }, [myFavourites]);


  const clearMyFavourites = () => {
    setMyFavourites([]);
  };

  return (
    <Grid container className="main-container" direction={"column"}>
      <Grid className="header-container" item lg={1} style={{ maxHeight: "10vh" }}>
        <HeaderComponent handleSetKeyWord={handleSetKeyWord} />
      </Grid>
      <Grid className="content-container" item lg={11}>
        <Grid container direction="row" alignItems="flex-start" style={{ height: "100%"}}>
          <Grid className='left-panel-container' item md={3} lg={2.5}>
            <MyFavouritesComponent sx={{ overlflowY:"scroll" }}
              myFavourites={myFavourites}
              clearMyFavourites={clearMyFavourites}
            ></MyFavouritesComponent>
          </Grid>
          <Grid className='result-container' item md={9} lg={9.5}>
            <DisplayResultsComponent
              keyWord={keyWord}
              myFavourites={myFavourites}
              updateMyFavourites={updateMyFavourites}
              ></DisplayResultsComponent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home;