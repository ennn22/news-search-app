import { Grid } from '@mui/material/';
import MyFavouritesPanel from "./MyFavouritesPanel";

const Home = () => {


  return (
    <Grid container className="main-container" direction={"column"}>
      <Grid className="header-container" item lg={1} style={{ maxHeight: "10vh" }}>
      </Grid>
      <Grid className="content-container" item lg={11}>
        <Grid container direction="row" style={{ height: "100%"}}>
          <Grid className='left-panel-container' item lg="2.5">
            <MyFavouritesPanel style={{ overlflowY:"scroll" }}
              // handleSetKeyword={handleSetKeyword}
              // myFavourites={myFavourites}
              // clearmyFavourites={clearmyFavourites}
            ></MyFavouritesPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

}


export default Home;