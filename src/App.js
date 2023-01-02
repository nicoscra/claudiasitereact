import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AppNavbar from './components/Navbar';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <AppNavbar />
      
      <Routes>
        <Route path= '/' element={<HomePage />} />
        <Route path= 'Contact' element={<ContactPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
