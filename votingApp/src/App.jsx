import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home'; // Ton Dashboard de microservices
import './App.css'; // Si tu veux appliquer du CSS global

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
