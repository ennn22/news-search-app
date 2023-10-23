import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Chip, TextField, Typography } from '@mui/material/';
import OrangeButton from './OrangeButton'

const Header = ({ keyWord, handleSetKeyWord }) => {
  const [userName, setUserName] = useState("John");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleSearch = () => {
    handleSetKeyWord(document.getElementById('search-input').value);
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
          id="search-input"
          label="Search"
          size="small"
          variant="outlined"
          value={keyWord}
        />
        <OrangeButton onClick={handleSearch}>
          Search
        </OrangeButton>
      </div>
      <div className="user-details">
        {userName && (
          <Chip label={userName} size="large" color="primary" />
        )}
        <Button onClick={handleLogout} variant="outlined" color="secondary">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;