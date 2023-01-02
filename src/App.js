import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppNavbar from './components/Navbar';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <AppNavbar />
      
      <Routes>
        <Route path= '/' element={<HomePage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
