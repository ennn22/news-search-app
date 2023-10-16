import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Container, Grid, Snackbar, TextField, Typography } from '@mui/material/';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  //Validation
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "John" && password === "12345") {
      setLoginSuccess(true)
      navigate("/home")
    };
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Login</button>
        {loginSuccess && <Alert severity="success">You've successfully logged in!</Alert>}
        </div>
      </form>
    </div>
  )
}



export default Login;