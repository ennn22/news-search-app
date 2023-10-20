import { Button, Grid, Typography } from '@mui/material/';

const MyFavouritesPanel = ({ handleSetKeyword, myFavourites, clearMyFavourites }) => {

  


  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">My Favorites</Typography>
        </Grid>
        <Grid item xs={12}>
          <ul>
            {/* {myFavourites.map((myFavourite, index) => (
              <li key={index}>
                <a href={myFavourite.url} target="_blank" rel="noopener noreferrer">
                  {myFavourite.title}
                </a>
              </li>
            ))} */}
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={clearMyFavourites}>
            Clear
          </Button>
        </Grid>
      </Grid>
    );
};


export default MyFavouritesPanel;