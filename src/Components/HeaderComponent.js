import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Chip, Stack, TextField, Typography } from '@mui/material/';

const Header = ({ keyWord, handleSetKeyWord }) => {
  const [userName, setUserName] = useState("John");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  // const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    handleSetKeyWord(document.getElementById('searchInput').value);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    navigate('/');
  };

  return (
    <div className="header-navbar">
      <Typography variant="h4">Find My News ;)</Typography>
      <div className="search-bar">
        <TextField
          id="searchInput"
          label="Search"
          variant="outlined"
          value={keyWord}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="user-details">
        {userName && (
          <Stack direction="row" spacing={1}>
            <Chip label={userName} variant="outlined" />
          </Stack>
        )}
        <Button onClick={handleLogout} variant="outlined" color="secondary">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;