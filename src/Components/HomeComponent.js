import axios from 'axios'
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material/';
import HeaderComponent from './HeaderComponent';
import MyFavouritesComponent from "./MyFavouritesComponent";
import DisplayResultsComponent from "./DisplayResultsComponent";
import { LocalGasStationRounded } from '@mui/icons-material';

const Home = () => {
  const LOCAL_STORAGE_KEY = "myFavourites";
  const [keyWord, setKeyWord] = useState("");
  const [myFavourites, setMyFavourites] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  const handleSetKeyWord = (keyWord) => {
    if(keyWord === '') {
      setKeyWord('');
    } else {
      setKeyWord(keyWord)
    }
  }

  const updateMyFavourites = (newsItem) => {
    setMyFavourites([...myFavourites], {newsItem});
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myFavourites));
  }


  const clearMyFavourites = () => {
    
  }


  return (
    <Grid container className="main-container" direction={"column"}>
      <Grid className="header-container" item lg={1} style={{ maxHeight: "10vh" }}>
        <HeaderComponent></HeaderComponent>
      </Grid>
      <Grid className="content-container" item lg={11}>
        <Grid container direction="row" alignItems="flex-start" style={{ height: "100%"}}>
          <Grid className='left-panel-container' item md={2} lg={2.5}>
            <MyFavouritesComponent style={{ overlflowY:"scroll" }}
              handleSetKeyWord={handleSetKeyWord}
              myFavourites={myFavourites}
              clearMyFavourites={clearMyFavourites}
            ></MyFavouritesComponent>
          </Grid>
          <Grid className='result-container' item md={10} lg={9.5}>
            <DisplayResultsComponent
              keyWord={keyWord}
              updatemyFavourites={updateMyFavourites}
              ></DisplayResultsComponent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

// 


export default Home;