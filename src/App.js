import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material/';
import LoginComponent from './Components/LoginComponent';
import HomeComponent from './Components/HomeComponent';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { NewsContextProvider } from './Context/NewsContext';
import api from './Api/articles';

function App() {
  const [alert, setAlert] = useState(null);

  //Alert for login error
  const setErrorAlert = (message) => {
    setAlert({
      type: "error",
      message: message
    })
  }

  //Alert for login success
  const setSuccessAlert = (message) => {
    setAlert({
      type: "success",
      message: message
    })
  }


  return (
    <div>
      <Router>
        <NewsContextProvider>
          <Routes>
            <Route path="/" element={<LoginComponent 
                setErrorAlert={setErrorAlert}
                setSuccessAlert={setSuccessAlert}
              />} />
            <Route path="/home" element={<HomeComponent />}/>
          </Routes>
        </NewsContextProvider>
      </Router>
      <Snackbar open={!!alert} autoHideDuration={3000} onClose={() => setAlert(null)}>
        <Alert severity={alert?.type}>{alert?.message}</Alert>
      </Snackbar>
    </div>
  )
}

export default App;
