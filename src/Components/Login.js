import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, LinearProgress, TextField, Typography } from '@mui/material/';

const Login = ({ setSuccessAlert, setErrorAlert }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);
  const navigate = useNavigate();

  //Validation
  const handleLogin =  (e) => {
    e.preventDefault();
    setIsLoginInProgress(true);

    setTimeout(() => {
      setIsLoginInProgress(false);
      
      if (userName === "John" && password === "12345") {
        setSuccessAlert("You've successfully logged in!")
        navigate("/home");
      } else {
        setErrorAlert("Invalid username or password")
      }
    }, 1000);
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
              id="standard-basic username"
              label="Username"
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-basic password"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="dense"
            />
          </Grid>
        </Grid>
        <div className='loginButton'>
          <button type="submit" disabled={isLoginInProgress}>
            {isLoginInProgress ? 'Logging in...' : 'Login'}
          </button>
          {isLoginInProgress && (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login;