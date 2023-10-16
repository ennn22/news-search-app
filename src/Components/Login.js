import { useState, useNavigate } from 'react';
import { Box, Container, Grid, TextField, Typography } from '@mui/material/';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // if (isLoggedIn) 
    //   return navigate('/home');
  };

  return (
    <div className='loginBigBox'>
      <Box className='loginHeader'>
        <Typography variant="h2">Daily News</Typography>
        <Typography variant="h4" sx={{ fontWeight: '600' }}>Login</Typography>
      </Box>
      <form className="loginBox" onSubmit={handleLogin}>
        <Grid 
          container 
          spacing={2} 
          direction="column" 
          justifyContent="center"
          alignItems="center">
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label="Username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"

              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="dense"
            />
          </Grid>
        </Grid>
      </form>
      <div className='loginButton'>
        <button type="submit">Login</button>
      </div>
    </div>
  )
}



export default Login;