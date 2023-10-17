import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material/';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [alert, setAlert] = useState(null);

  const setErrorAlert = (message) => {
    setAlert({
      type: "error",
      message: message
    })
  }

  const setSuccessAlert = (message) => {
    setAlert({
      type: "success",
      message: message
    })
  }
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login 
              setErrorAlert={setErrorAlert}
              setSuccessAlert={setSuccessAlert}
            />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Snackbar open={!!alert} autoHideDuration={3000} onClose={() => setAlert(null)}>
        <Alert severity={alert?.type}>{alert?.message}</Alert>
      </Snackbar>
    </div>
  )
}

export default App;
