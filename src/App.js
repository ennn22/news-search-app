import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/home" />
      </Routes>
    </Router>
  )
}

export default App;
