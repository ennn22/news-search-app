import { Grid, Typography } from '@mui/material/';
import OrangeButton from './OrangeButton';
import { orange } from '@mui/material/colors';

const MyFavouritesPanel = ({ myFavourites, clearMyFavourites }) => {

  return (
      <Grid className='myfavourites-box'container spacing={2}>
        <Grid className='myfavourites-header' item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>My Favorites:</Typography>
          <Typography variant="h6" sx={{ color: orange[500], fontWeight: 600 }}>{myFavourites.length} Articles</Typography>
        </Grid>
        <Grid className='myfavourites-item' item xs={12}>
          <ul>
            {myFavourites.map((myFavourite, index) => (
              <li key={index}>
                <a href={myFavourite.url} target="_blank" rel="noopener noreferrer">
                  {myFavourite.title}
                </a>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid className='clear-btn'item xs={12}>
          <OrangeButton size="large" onClick={clearMyFavourites}>
            Clear
          </OrangeButton>
        </Grid>
      </Grid>
    );
};


export default MyFavouritesPanel;